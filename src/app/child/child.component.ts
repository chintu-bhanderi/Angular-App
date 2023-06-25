import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input('parentData') public name:string = "Raxit"
  @Output() public childEvent = new EventEmitter()

  constructor() { }
  ngOnInit() { 
   }
  fireEvent() {

    this.childEvent.emit('Hi from child component')

  }

}
