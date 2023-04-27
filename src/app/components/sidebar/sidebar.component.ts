import { Component, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  nav: boolean = false
  show: string = 'right'
  constructor(){

  }

  navBar(){
    this.nav = !this.nav
    this.nav? this.show = 'left': this.show = 'right'
  }
}

