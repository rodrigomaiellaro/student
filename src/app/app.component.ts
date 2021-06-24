import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula2';

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ]
  
  luke = {name:'Luke', isJedi: true, temple: 'Coruscant'};
  leia = {name:'Leia', isJedi: false};
  han = {name:'Han Solo', isJedi: false};
}
