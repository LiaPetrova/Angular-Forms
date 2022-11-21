import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges,  } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'AppHighlightExpt'
})
export class HighlightDirective implements OnInit, OnChanges {


  	@Input('appHighlight') backgroundColor: string = 'yellow';

    @Input()
    @HostBinding('style.color')
    color: string = 'dark';

    @HostListener('mouseenter')
    handleMouseEnter(): void {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');
      this.colorChange.emit('pink');
    }

    @HostListener('mouseleave')
    handleMouseLeave(): void {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'purple');
      this.colorChange.emit('purple');
    }

    @Output() colorChange: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
    // (this.el.nativeElement as HTMLElement).addEventListener('mouseenter', () => {
    //   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');
    // });

    // (this.el.nativeElement as HTMLElement).addEventListener('mouseleave', () => {
    //   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'purple');
    // });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
   (this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;
  }

}
