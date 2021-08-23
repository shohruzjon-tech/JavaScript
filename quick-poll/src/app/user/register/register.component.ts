import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  {combineLatest} from 'rxjs'
import { UserService } from 'src/app/services/user.service';
import { EmailValidator, UsernameValidator ,PasswordValidator} from '../../validators/register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService) {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required,UsernameValidator]],
      email : ['',[Validators.required,EmailValidator]],
      password : ['',[Validators.required,PasswordValidator]],
      confirm:['',Validators.required]
    });
  }

  ngOnInit(): void {
    combineLatest(
      [this.registerForm.get('password')?.valueChanges,
      this.registerForm.get('confirm')?.valueChanges]
      ).subscribe(([pass='',conf=''])=>{
        const match:boolean = pass && conf ? pass==conf : false;
        if(!match){
          this.registerForm.get('confirm')?.setErrors({confirm:true});
        }
      });
    this.registerForm.get('username')?.valueChanges.subscribe((username:string)=>{
      // const exist : boolean = this.userService.checkUsername(username).username_exist;
      const exist = false;
      if(exist) this.registerForm.get('confirm')?.setErrors({username:'Username Taken'});
    })
  }
  register(){
    this.userService.register(this.registerForm.value)
    .subscribe(
      success=> this.router.navigate(['login']),
      error=>console.log(error)
      );
  }
  login(){
    console.log("login");
    this.router.navigate(['login']);
  }

}
