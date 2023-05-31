import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../core/services/auth.service';
import { User } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  authUser$: Observable <User | null>;
  constructor(private authService: AuthService){
    this.authUser$ = this.authService.getUserAuth()
  }

  logout(){
    this.authService.logout()
  }
}
