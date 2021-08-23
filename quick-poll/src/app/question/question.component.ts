import { Component, OnInit ,Input} from '@angular/core';
import { FormStateService } from '../services/form-state.service';
import { Poll } from '../services/poll.model';
import { QuickDataService } from '../services/quick-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question:Poll={id:'',question:'',options:[],timestamp:0}
  created:Date = new Date();
  constructor(public formState : FormStateService,private dataService:QuickDataService) { }

  ngOnInit(): void {
    this.created = new Date(this.question.timestamp);
  }
  edit(){
    this.formState.poll = this.question;
    this.formState.onChange.emit({
      open:true,
      type:'Edit',
    });
  }
  delete(){
    this.dataService.delete(this.question.id);
  }
}
