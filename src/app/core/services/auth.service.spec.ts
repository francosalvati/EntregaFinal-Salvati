import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginFormValue, User } from "src/app/models";
import { Router } from "@angular/router";
import { skip } from 'rxjs';
import { environment } from "src/environments/environment";
import { Store, StoreModule } from "@ngrx/store";
import { AppState, actionReducerMap } from "src/app/store";

describe('Testing AuthService', () => {

  let service: AuthService;
  let store: Store<AppState>
  let httpController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(actionReducerMap, {}),],
    }).compileComponents()

    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController)
  })

  it('login must works', (done) => {
    const mock_user: LoginFormValue = {
      email: 'test@mail.com',
      password: 'test'
    }
    const MOCK_REQUEST: User[] = [{
      id: 1,
      name: 'test',
      lastname: 'lasttest',
      email: mock_user.email,
      password: mock_user.password,
      role: 'admin',
      token: 'randomtoken',
    }]
    // espia si se ejecuta una funcion
    spyOn(TestBed.inject(Router), 'navigate')

    service
      .getUserAuth().pipe(
        skip(1)
      ).subscribe((user) => {
        expect(user).toEqual(MOCK_REQUEST[0])
        done()
      })

    service.login(mock_user)

    httpController.expectOne({
      url: `${environment.apiURL}/users?email=${mock_user.email}&password=${mock_user.password}`,
      method: 'GET'
    })
      .flush(MOCK_REQUEST)


  })


  it('logout must emit an user = null, remove token from ngrx and redirect to login', () => {
    const spyOnNavigate = spyOn(TestBed.inject(Router), 'navigate')

    const mock_user: LoginFormValue = {
      email: 'test@mail.com',
      password: 'test'
    }

    const MOCK_REQUEST: User[] = [{
      id: 1,
      name: 'test',
      lastname: 'lasttest',
      email: mock_user.email,
      password: mock_user.password,
      role: 'admin',
      token: 'randomtoken',
    }]

    service.login(mock_user)

    httpController.expectOne({
      url: `${environment.apiURL}/users?email=${mock_user.email}&password=${mock_user.password}`,
      method: 'GET'
    }).flush(MOCK_REQUEST)

    service.logout()
    const tokenStorage = localStorage.getItem('token')

    expect(tokenStorage).toBe(null)
    expect(spyOnNavigate).toHaveBeenCalled()
  })

})
