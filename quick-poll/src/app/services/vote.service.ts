import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuickPollUrls } from './Url.model';
import { Vote } from './vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  QUICK_POLL_URI = QuickPollUrls;
  constructor(private http:HttpClient) { }
  save(choice:Vote){
    return this.http.post(this.QUICK_POLL_URI(choice.pollId).votes,choice);
  }
}
