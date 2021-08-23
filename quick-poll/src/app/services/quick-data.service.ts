import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Poll } from './poll.model';
import { QuickPollUrls } from './Url.model';
@Injectable({
  providedIn: 'root'
})
export class QuickDataService {
  private QUICK_POLL_URI = QuickPollUrls;

  constructor(private http: HttpClient) { }

  save(poll:Poll){
    poll.options = poll.options.map(option=> {
      return {value:option}
    })
    this.http.post(this.QUICK_POLL_URI().polls,poll).subscribe();
  }
  update(poll:Poll){
    poll.options = poll.options.map(option=> {
      return {value:option}
    })
    this.http.put(this.QUICK_POLL_URI(poll.id).polls,poll).subscribe();
  }
  delete(id:string):void{
    this.http.delete(this.QUICK_POLL_URI(id).polls).subscribe();
  }
  load(){
    return this.http.get<Array<Poll>>(this.QUICK_POLL_URI().polls);
  }
}
