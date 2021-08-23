import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() option :string='';
  index:number=0;
  placeholder:string= '';
  constructor() { 
  }

  ngOnInit(): void {
    this.placeholder = `Option ${this.index}`;
  }

}
