import { 
  Component ,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef
} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {AlertComponent} from './components/alert/alert.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datacenterV1';
  @ViewChild(DashboardComponent)
  dashboard: DashboardComponent|undefined;
  @ViewChild('alertBox',{read: ViewContainerRef}) 
  alertBox: ViewContainerRef|any;
  alertRef: ComponentRef<AlertComponent>|any;
  constructor(private resolver: ComponentFactoryResolver){
    
  }
  reload(){
    this.dashboard?.generateData();
  }
  alert(date:Date):void{
    if(!this.alertRef){
      const alertComponent = this.resolver.resolveComponentFactory(AlertComponent);
      if(this.alertBox) console.log(true+"DataCenetr-----")
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef?.changeDetectorRef.detectChanges();
    setTimeout(()=>this.destroyAlert(),4000);
  }
  destroyAlert():void{
    if(this.alertRef){
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }
}
