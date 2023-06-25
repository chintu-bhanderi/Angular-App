import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})        
export class StudentService {
  public student_list : string[] = ['Raxit','Chintu','John'];
  constructor() { }
  getStudentList() : string[] {
    return this.student_list;
  }
}
