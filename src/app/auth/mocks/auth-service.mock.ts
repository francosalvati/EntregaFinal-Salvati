import { LoginFormValue, User } from "src/app/models";
import { BehaviorSubject, Observable, of } from 'rxjs';

export const AdminUserMock: User = {
  id: 1,
  name: 'test',
  lastname: 'lasttest',
  email: 'test@mail.com',
  role: 'admin',
  token: 'asdkjsanfkdams3u2hjdasfasdaadsuh',
  password: 'testpassword',
}

export class AuthServiceMock {
  private authUser$ = new BehaviorSubject<User | null>(null)

  login(formTest: LoginFormValue): void {
    this.authUser$.next(AdminUserMock)
  }

  verifyToken(): Observable < boolean > {
    return of(true)
  }

}
