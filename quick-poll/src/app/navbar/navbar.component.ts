import { 
  Component,
  OnInit ,
  ViewChild} from '@angular/core';
import {QuestionFormComponent} from '../question-form/question-form.component'
import { FormStateService } from '../services/form-state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adder:any;
  constructor(private formState: FormStateService) { 

  }

  ngOnInit(): void {
  }
  openQuestion(){
    this.formState.onChange.emit({
      open:true,
      type:'Add',
    });
  }
}
