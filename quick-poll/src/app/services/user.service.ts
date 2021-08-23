import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_URL, USER_URL } from './Url.model';
import { UserModel } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user:UserModel){
    return this.http.put(USER_URL,user);
  }
  checkUsername(username:string):{username_exist:boolean}{
    let exist = {username_exist:false};
    this.http.get<{username_exist:boolean}>(USER_URL+`/${username}`)
    .subscribe(response=> exist=response);
    return exist;
  }
  login(credentials :{username:string,password:string}){
    const params = new URLSearchParams(credentials);
    console.log(params)
    console.log("-------------------------------")
    const cred = new HttpParams();
    console.log(credentials.username+"cccccc")
    cred.set('username',credentials.username);
    cred.set('password',credentials.password);
    console.log(cred)
    this.http.post<{access_token:string}>(LOGIN_URL+`?username=v${credentials.username}&password=${credentials.password}`,{}).subscribe(reply=>console.log(reply));
  }
}
