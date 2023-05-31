import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { LoginFormValue, User } from 'src/app/models';
import { AppState } from 'src/app/store';
import { DelUserAuth, SetUserAuth } from 'src/app/store/auth/auth.actions';
import { selectAuthState, selectAuthUser } from 'src/app/store/auth/auth.selector';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiURL;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) { }

  getUserAuth(): Observable < User | null > {
    return this.store.select(selectAuthUser)
  }

  setUserAuth(user: User, token: string) {
    this.store.dispatch(SetUserAuth({ payload: { ...user, token } }))
  }

  login(formValue: LoginFormValue): void | boolean {
    this.httpClient.get<User[]>(`${this.apiUrl}/users`, {
      params: {
        ...formValue
      }
    }).subscribe(
      {
        next: (user => {
          const auth = user[0]
          if (auth) {
            localStorage.setItem('token', auth.token)
            this.setUserAuth(auth, auth.token)
            this.router.navigate(['home'])
          } else {
            alert('Contrasenia o usuario incorrecto')
          }
        })
      })
    return true
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<User[]>(`${this.apiUrl}/users?token=${token}`, {
      headers: new HttpHeaders({
        'Authorization': token || ''
      }),
    }).pipe(
      map(user => {
        const auth = user[0]
        if (auth) {
          localStorage.setItem('token', auth.token)
          this.setUserAuth(auth, auth.token)
        }
        return !!auth
      }),
      catchError((err) => {
        return of(false)
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token')
    this.store.dispatch(DelUserAuth())
    this.router.navigate(['auth/login'])
  }

}
