import { Component, OnInit,OnDestroy,Output,EventEmitter } from '@angular/core';
interface Metric{
  used: number;
  available:number;
}
interface Node{
  name: string;
  cpu:Metric;
  mem: Metric;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  memory: Metric;
  cpu: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;
  constructor() {
    this.memory = {used:0,available:0};
    this.cpu = {used:0,available:0};
    this.cluster1 = [];
    this.cluster2 = [];
   }
  @Output('changed') alert : EventEmitter<Date> = new EventEmitter<Date>();
  ngOnInit(): void {
    this.interval = setInterval(()=>this.generateData(),8000);
  }
  ngOnDestroy(): void{
    this.interval = clearInterval(this.interval);
  }
  generateData():void{
    this.cluster1 = [];
    this.cluster2 = [];
    this.memory = {used:0,available:0};
    this.cpu = {used:0,available:0};
    for(let i =0;i<4;i++) this.cluster1.push(this.randomNode(i));
    for(let i =4;i<7;i++) this.cluster2.push(this.randomNode(i));
    this.alert.emit(new Date())
  }
  private randomNode(i:number): Node{
    const node: Node ={
      name: `node ${i}`,
      mem:{
        available:16,
        used:this.randomNumber(16)
      },
      cpu:{
        available:48,
        used:this.randomNumber(48)
      }
    };
    this.cpu.available += node.cpu.available;
    this.cpu.used += node.cpu.used;
    this.memory.available += node.mem.available;
    this.memory.used += node.mem.used; 
    return node;
  }
  private randomNumber(max:number=100):number{
    return Math.floor(Math.random()*max)+1;
  }
}
