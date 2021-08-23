import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
    message : string ='';
    type: string='info';
    show:boolean= true;
    timer: any;
    alert(message:string,type:string='info',autohide:number = 5000){
        this.message = message;
        this.show = false;
        this.type = type;
        if(this.timer){
            clearTimeout(this.timer);
        }
        if(autohide){
            setTimeout(()=>this.close(),autohide)
        }
        console.log(this.show)
    }
    close(){
        this.show = true;
    }
}
