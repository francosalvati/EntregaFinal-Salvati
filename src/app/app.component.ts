import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'PreEntrega-1-Salvati';
  @ViewChild(SidebarComponent)
  sideBarComponentRef?: SidebarComponent;
  @ViewChild(ToolbarComponent)
  toolBarComponent?: ToolbarComponent;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
