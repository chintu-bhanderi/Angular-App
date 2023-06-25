import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name: string = "PMJ"
  public username : string = "chintu9"
  public isAllow = false
  public birthday : Date = new Date(1979, 1, 12);
  constructor() { }
  ngOnInit() { }
  public sayHello(): string {
    return "Hello"
  }
}
