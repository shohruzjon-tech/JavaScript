import { 
  Component, 
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  AfterViewInit,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  Input} from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { FormStateService } from '../services/form-state.service';
import { Poll } from '../services/poll.model';
import {QuickDataService} from '../services/quick-data.service'
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit,AfterViewInit ,OnChanges{
  @ViewChild('moreOptions',{read:ViewContainerRef})
  moreOptions: ViewContainerRef|any;
  constructor(
    private dataService: QuickDataService,
    private factory: ComponentFactoryResolver,
    public formState: FormStateService,
    private changeDet: ChangeDetectorRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngAfterViewInit(): void {
    this.formState.optionView = this.moreOptions;
    this.changeDet.detectChanges();
  }

  ngOnInit(): void {
    
  }
  submit(){
    this.formState.savePoll();
  }
  addOption(){
    this.formState.setOption('');
  }
  
  
}

