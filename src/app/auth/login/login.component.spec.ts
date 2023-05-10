import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from "@angular/common/http"
import { SharedModule } from "src/app/shared/shared.module"
import { PipesModule } from "src/app/shared/pipes/pipes.module"
import { ReactiveFormsModule } from "@angular/forms"
import { RouterTestingModule, } from "@angular/router/testing";
import { AuthService } from "src/app/core/services/auth.service"
import { AuthServiceMock } from "../mocks/auth-service.mock"



describe('testing LoginComponent', () => {

  let component: LoginComponent

  beforeEach( async () => {
    await TestBed.configureTestingModule({

      declarations:[ LoginComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        }
      ]
    }).compileComponents();
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('if input of email is empty formControl of email must be invalid', () => {
    component.loginForm.setValue({email: null, password: null})
    expect(component.emailControl.invalid).toBeTrue()
  })

  it('if input of password is empty formControl of password must be invalid', () => {
    component.loginForm.setValue({email: null, password: null})
    expect(component.passwordControl.invalid).toBeTrue()
  })

  it('if loginForm is invalid, must mark all input as touched', () => {
    component.loginForm.setValue({email: null, password: null})
    const spyOnMarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched')

    component.login();

    expect(spyOnMarkAllAsTouched).toHaveBeenCalled()
  })

  it('if loginForm is valid, must call the login method in authService' , () => {
    component.loginForm.setValue({email: 'test@mail.com', password: 'testpassword'})
    const spyOnAuthServiceLogin = spyOn( TestBed.inject(AuthService), 'login')
    component.login()
    expect(component.loginForm.valid).toBeTrue()
    expect(spyOnAuthServiceLogin).toHaveBeenCalled()
  })
})
