import { 
  Component, 
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver} from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { Poll } from '../services/poll.model';
import {QuickDataService} from '../services/quick-data.service'
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  optionIndex:number = 2;
  openModal:boolean=false;
  poll:Poll={id:'',question:'',options:[],timestamp:0}
  @ViewChild('moreOptions',{read:ViewContainerRef})
  moreOptions: ViewContainerRef|any;
  optionRef: ComponentRef<OptionComponent>[]=[];
  constructor(private dataService: QuickDataService,private factory: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    for(let i:number =0;i<2;i++){
      const optionComponent = this.factory.resolveComponentFactory(OptionComponent);
      this.optionRef.push(this.moreOptions.createComponent(optionComponent));
      // this.optionRef[i].instance.index = i;
    }
  }
  addQuestion(){
    this.openModal= false;
    this.poll.timestamp = new Date().getTime();
    this.optionRef.forEach((option:ComponentRef<OptionComponent>)=>{
      let instOption = option.instance.option;
      this.poll.options.push(instOption);
    });
    this.dataService.save(this.poll);
    this.poll = {id:'',question:'',options:[],timestamp:0};
  }
  addOption(){
    const optionComponent = this.factory.resolveComponentFactory(OptionComponent);
    this.optionRef.push(this.moreOptions.createComponent(optionComponent));
    let index = this.optionRef.length;
    this.optionRef[index-1].instance.index = index;
  }
}
