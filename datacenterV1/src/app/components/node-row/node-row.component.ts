import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import {NodeDetailsComponent} from '../node-details/node-details.component'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: '[app-node-row]',
  templateUrl: './node-row.component.html',
  styleUrls: ['./node-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeRowComponent implements OnInit {
  @Input() node: any;
  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }
  isDanger(prop:string):boolean{
    return this.node[prop].used/this.node[prop].available >0.7;
  }
  view(node:any){
    const nodeDetailModal = this.modal.open(NodeDetailsComponent);
    nodeDetailModal.componentInstance.node = node;
  }
}
