import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {Routes,RouterModule} from '@angular/router'
import {ClarityModule} from '@clr/angular'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
const routes :Routes =[
  {path:'' , component: RegisterComponent},
  {path:'register' , component: RegisterComponent},
  {path:'login' , component: LoginComponent}
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClarityModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class UserModule { }
