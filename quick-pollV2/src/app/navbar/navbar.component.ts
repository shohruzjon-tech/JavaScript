import { 
  Component,
  OnInit ,
  ViewChild} from '@angular/core';
import {QuestionFormComponent} from '../question-form/question-form.component'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adder:any;
  @ViewChild(QuestionFormComponent) questionForm:QuestionFormComponent|undefined;
  constructor() { 
  }

  ngOnInit(): void {
  }
}
