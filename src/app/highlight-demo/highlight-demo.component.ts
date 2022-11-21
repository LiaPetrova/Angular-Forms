import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-highlight-demo',
  templateUrl: './highlight-demo.component.html',
  styleUrls: ['./highlight-demo.component.css']
})
export class HighlightDemoComponent implements OnInit, AfterViewInit {

  backgroundColor: string = 'grey';

  @ViewChild('myParagraph') myParagraph!: HighlightDirective

  constructor() { }

  ngOnInit(): void {
  }

  handleColor(newColor: string) {
    console.log('new color' + newColor);
  }

  ngAfterViewInit(): void {
    console.log(this.myParagraph);
    this.myParagraph.color = 'violet';  
  }
}
