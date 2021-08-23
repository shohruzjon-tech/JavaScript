import { Component, OnInit ,Input} from '@angular/core';
import { Poll } from '../services/poll.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question:Poll={id:'',question:'',options:[],timestamp:0}
  created:Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.created = new Date(this.question.timestamp);
  }
}
