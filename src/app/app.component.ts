import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  // this is selector which present in index.html file 
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "App Component"
  public student_list : string[] = [];
  constructor(public studentService: StudentService){
  }
  ngOnInit(){
    this.student_list = this.studentService.getStudentList();
  }
  // name = " Parent: My name is App Component "
  childMsg = "child msg not received";

  msgFromChild(msg:string) {

    this.childMsg = msg

  }
}
