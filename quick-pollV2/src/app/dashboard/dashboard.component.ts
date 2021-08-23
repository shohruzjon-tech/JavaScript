import { 
  Component,
  OnInit
} from '@angular/core';
import { Poll } from '../services/poll.model';
import {QuickDataService} from '../services/quick-data.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:QuickDataService) { }
  interval: any;
  polls:Poll[]=[];
  ngOnInit(): void {
    this.interval =setInterval(()=>{
      this.dataService.load().subscribe(polls=>this.polls=polls);
    },5000);
  }

}
