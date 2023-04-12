import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges {

  @Input() tamanioFuente: string = '20';


  constructor(private element: ElementRef, private renderer: Renderer2) {


    this.renderer.setStyle(this.element.nativeElement, "font-size", `${this.tamanioFuente}px`)
  }

  ngOnChanges(): void {

  }

}
