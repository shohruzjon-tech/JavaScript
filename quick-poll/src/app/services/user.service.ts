import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOGIN_URL, USER_URL } from './Url.model';
import { UserModel } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user:UserModel){
    return this.http.post(USER_URL,user);
  }
  checkUsername(username:string):{username_exist:boolean}{
    let exist = {username_exist:false};
    this.http.get<{username_exist:boolean}>(USER_URL+`/${username}`)
    .subscribe(response=> exist=response);
    return exist;
  }
  login(credentials :{username:string,password:string}){
    let body:string = `username=${credentials.username}&password=${credentials.password}`;
    let headers:HttpHeaders= new HttpHeaders({'Content-type':'application/x-www-form-urlencoded'})
    return this.http.post<{Access_token:string}>(LOGIN_URL,body,{headers:headers});        
  }
  
}
