import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Poll } from './poll.model';
@Injectable({
  providedIn: 'root'
})
export class QuickDataService {
  private QUICK_POLL_URI:string = 'http://10.33.121.90:6001/v1/poll';

  constructor(private http: HttpClient) { }

  save(poll:Poll){
    poll.options = poll.options.map(option=> {
      return {value:option}
    })
    this.http.post(this.QUICK_POLL_URI,poll).subscribe();
  }
  load(){
    return this.http.get<Array<Poll>>(this.QUICK_POLL_URI);
  }
}
