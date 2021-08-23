import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key:string,fallBack: any){
    let value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) : fallBack;
  }
}
