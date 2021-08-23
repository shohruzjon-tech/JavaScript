import { Injectable } from '@angular/core';
import {Stock} from './stocks.model'
import {LocalStorageService} from './local-storage.service'

const defaultBalance = 10000;
@Injectable()
export class AccountService {
    private _balance = defaultBalance;
    private _cost = 0;
    private _stocks: Stock[]=[];
    private _value =0;
    
    get balance() {return this._balance; }
    get cost() {return this._cost;}
    get stocks():Stock[] {return this._stocks;}
    get value() {return this._value;}
    constructor(private localStorageService:LocalStorageService){}
    purchase(stock:Stock):void{
        stock = Object.assign({},stock);
        if(this._balance >= stock.price){
            this._balance = this.credit(this._balance,stock.price);
            this._cost = this.credit(this._cost,stock.price);
            stock.change = 0;
            this._stocks.push(stock);
            this.cacheValues();
        }
    }
    sell(index):void{
        let stock:Stock = this._stocks[index];
        if(stock){
            this._balance = this.debit(this._balance,stock.price);
            this._cost = this.debit(this._cost,stock.price);
            this._stocks.splice(index,1);
            this.cacheValues()
        }
    }
    reset():void{
        this._balance = defaultBalance;
        this._stocks=[];
        this._value = this._cost = 0;
        this.cacheValues();
    }
    calculateValue():void{
        this._value = this._stocks
        .map(stock=>stock.price)
        .reduce((priceX,priceY)=> {return priceX+priceY},0)

    }
    credit(balance,amount){
        return (amount*100+balance*100)/100
    }
    debit(balance,amount){
        return (balance*100-amount*100)/100
    }
    init(){
        this._balance = this.localStorageService.get("balance",defaultBalance);
        this._stocks= this.localStorageService.get("stocks",[]);
        this._cost = this.localStorageService.get("cost",0);
    }
    cacheValues(){
        this.localStorageService.set("balance",this._balance);
        this.localStorageService.set("stocks",this._stocks);
        this.localStorageService.set("cost",this._cost);
    }
}
