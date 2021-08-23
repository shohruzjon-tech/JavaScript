import { Component, OnInit } from '@angular/core';
import {StockService,StockInterface} from '../../services/stock-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  symbols: Array<string>;
  stocks: Array<StockInterface> =[];
  constructor(private service:StockService) {
    this.symbols = service.get();
  }

  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(stocks=> this.stocks =stocks);
  }

}
