import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Poll } from '../services/poll.model';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit,OnChanges {
  @Input('question') question : Poll ={id:'',question:'',options:[''],timestamp:0}
  voted : string = '';
  constructor(private voteService:VoteService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.voted = localStorage.getItem(this.question.id) || '';
  }
  ngOnInit(): void {
  }
  vote(){
    const optionRegex:string = this.question
                            .options
                            .map(option=>`(${option.value})`)
                            .join('|');
    const regex:RegExp = new RegExp(optionRegex);
    const [choice] = regex.exec(this.voted) || [];
    this.voteService.save({
        pollId:this.question.id,
        option:{value:choice}
      }).subscribe(error=>console.log(error));
  }
  picked(option:string){
    localStorage.setItem(this.question.id,option);
    console.log(option);
  }

}
