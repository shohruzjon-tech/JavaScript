import { Component, OnInit } from '@angular/core';
import {StockService,StockInterface} from './service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<string> =[];
  constructor() { }

  ngOnInit(): void {
  }

}
