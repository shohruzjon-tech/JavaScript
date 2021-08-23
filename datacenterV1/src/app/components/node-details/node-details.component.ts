import { Component,Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap/'

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent {
  @Input() node:any;
  constructor(public active:NgbActiveModal) { }
  isDanger(node:any):boolean{
    return node && node.used/node.available > 0.7;
  }
  getType(prop:string) : string{
    return this.isDanger(this.node[prop]) ? 'danger':'success';
  }
}
