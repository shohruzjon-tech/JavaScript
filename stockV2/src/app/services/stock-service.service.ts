import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface StockInterface{
  symbol: string;
  change: number;
  lastTradePriceOnly: number;
  changeInPercent: number;
}
const symbols: Array<string> = ['AAPL','GOOG','FB','AMZN','TWTR']
const url : string = `https://angular2-in-action-api.herokuapp.com`;
@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  constructor(private http: HttpClient) { }
  get(){
    return symbols.slice();
  }
  remove(symbol:string){
    symbols.splice(symbols.indexOf(symbol),1);
    return symbols;
  }
  add(symbol:string){
    symbols.push(symbol);
    return symbols;
  }
  load(symbols:Array<string>){
    return this.http.get<Array<StockInterface>>(`${url}/stocks/snapshot?symbols=${symbols.join()}`);
  }
}
