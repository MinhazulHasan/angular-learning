import { Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element!: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  ngDoCheck(): void {
    console.log("ngDoCheck called!")
  }
  
  constructor() {
    console.log('constructor called!');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log("paragraph = ", this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log("Changes = ", changes);
  }

  
}
