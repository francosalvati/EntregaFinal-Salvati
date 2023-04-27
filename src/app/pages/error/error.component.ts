import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})


export class ErrorComponent implements OnInit {

  change = false;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {

    setTimeout(() => {
      this.change = true;
      console.log(this.change)
    }, 500)

  }




}
