import { Component, OnInit, OnDestroy } from '@angular/core';
import {AccountService} from './services/account.service';
import {StocksService} from './services/stocks.service'
import {Stock} from './services/stocks.model'
import {AlertService} from './services/alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StocksService]
})
export class AppComponent implements OnInit, OnDestroy {
  interval:any;
  stocks: Stock[];
  reflesh:boolean=true;
  constructor(
    private alertService:AlertService,
    private accountService:AccountService,
    private stocksService:StocksService)
    {
 
    }

  ngOnInit(): void {
    this.accountService.init();
    this.interval = setInterval(()=> {      
      if(this.reflesh) this.load();
    },1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.stocks = [];
  }

  toggleRefresh(): void {
    this.reflesh = !this.reflesh;
    let done: string = this.reflesh ? "Enabled":"Disabled";
    this.alertService.alert(
      `You have ${done} Auto Reflesh`
    )
  }

  reset(): void {
    this.accountService.reset();
  }

  private load(): void {
    this.stocksService
    .getStocks()
    .subscribe(
      stocks => this.stocks = stocks,
      error=>console.log(`There was an error in fetching the data ${error}`)
    );
  }
}
