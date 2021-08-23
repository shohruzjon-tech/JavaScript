import { Injectable } from '@angular/core';
import {Stock} from './stocks.model'
import {AccountService} from './account.service'
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpInterceptor
} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import { ConfigService } from './config.service';
@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(private accountService:AccountService) { }
  intercept(req:HttpRequest<any>,handler:HttpHandler)
  :Observable<HttpEvent<any>>
  {
    const request = req.clone();
    request.headers.append('ContentType','application/json');
    return handler.handle(request).do(event=>{
      if(event instanceof HttpResponse 
        && event.url === ConfigService.get('api')){
          const stocks = event.body as Stock[];
          let symbol:string[] = this.accountService.stocks.map(stock=>stock.symbol);
          stocks.forEach(stock=>{
            this.accountService.stocks.map(userStock=>{
              if(userStock.symbol === stock.symbol){
                userStock.price = stock.price;
                userStock.change = (stock.price*100-userStock.cost*100)/100
              };
            })
          });
          this.accountService.calculateValue();
          return stocks;
      }
    });
  }
}
