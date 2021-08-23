import { Component} from '@angular/core';
import {StockService} from '../../services/stock-service.service'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent{
  symbols : Array<string>;
  symbol : string = '';
  constructor(private service : StockService) {
    this.symbols = service.get();
   }
  add(){
    this.symbols = this.service.add(this.symbol);
  }
  remove(symbol:string){
    console.log(symbol);
    this.symbols = this.service.remove(symbol);
  }

}
