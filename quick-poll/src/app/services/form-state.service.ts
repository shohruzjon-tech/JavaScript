import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, OnInit, ViewContainerRef } from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { Poll } from './poll.model';
import {QuickDataService} from './quick-data.service';

@Injectable({
  providedIn: 'root'
})
export class FormStateService{
  onChange : EventEmitter<{open:boolean,type:string}> = new EventEmitter<{open:boolean,type:string}>();
  open:boolean =false;
  type:string = 'Add'
  poll:Poll={id:'',question:'',options:[],timestamp:0}
  optionRef: ComponentRef<OptionComponent>[]=[];
  optionView: ViewContainerRef|any;
  constructor(private factory:ComponentFactoryResolver,private dataService:QuickDataService) {
    this.onChange.subscribe(change=>{
      this.open = change.open;
      this.type = change.type;
      this.optionView.clear();
      this.optionRef  = [];
      if(change.type.match('Add')) this.initAdd();
      if(change.type.match('Edit'))  this.initEdit();
    });
  }
  setOption(message:string){
    const optionComponent = this.factory.resolveComponentFactory(OptionComponent);
    this.optionRef.push(this.optionView.createComponent(optionComponent));
    let index : number = this.optionRef.length -1;
    this.optionRef[index].instance.index = index+1;
    this.optionRef[index].instance.option = message;
  }
  initAdd(){  
    this.setOption('');
    this.setOption('');
  }
  initEdit(){  
    this.poll.options
      .map(opt=> opt.value)
      .forEach(opt=>{
        this.setOption(opt);
      });
    this.poll.options = [];
  }
  getPoll(): Poll{
    this.open = false;
    this.poll.timestamp = new Date().getTime();
    this.optionRef.forEach((option:ComponentRef<OptionComponent>)=>{
      let instOption = option.instance.option;
      
      this.poll.options.push(instOption);
    });
    return this.poll;
  }
  savePoll(){
    if(this.type.match('Add')) this.dataService.save(this.getPoll());
    else this.dataService.update(this.getPoll());
    this.poll = {id:'',question:'',options:[],timestamp:0};      
    this.open =false;
  }
  get title():string {
    return this.type.match('Add') ? 'New Question' : 'Edit Question'
  }
}
