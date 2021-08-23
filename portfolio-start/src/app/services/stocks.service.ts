import { Injectable } from '@angular/core';
import {Stock} from './stocks.model';
import {HttpClient} from '@angular/common/http'
import {ConfigService} from './config.service'
@Injectable()
export class StocksService {
    constructor(private http:HttpClient){}
    getStocks(){
        return this.http.get<Stock[]>(ConfigService.get('api'));
    }
}