import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout()
  }
}
