import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService) { 
    this.loginForm = this.formBuilder.group({
      username :['',Validators.required],
      password :['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  login(){
    this.userService.login(this.loginForm.value);
  }

}
