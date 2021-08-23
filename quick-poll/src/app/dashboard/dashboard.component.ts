import { 
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { Poll } from '../services/poll.model';
import {QuickDataService} from '../services/quick-data.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('questionForm') questionForm : QuestionFormComponent|undefined;
  constructor(private dataService:QuickDataService) { }
  interval: any;
  polls:Poll[]=[];
  ngOnInit(): void {
    this.loadPolls();
    this.interval =setInterval(()=>{
      this.loadPolls();
    },5000);
    
  }
  loadPolls(){
    this.dataService.load().subscribe(polls=>this.polls=polls);
  }

}
