import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {QuickDataService} from './services/quick-data.service';
import { OptionComponent } from './option/option.component';
import { FormStateService } from './services/form-state.service';
import { VoteComponent } from './vote/vote.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Routes,RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
// import {UserModule} from './user/user.module'
const routes: Routes = [
  {path:'',loadChildren:()=> import('./user/user.module').then(mdl=>mdl.UserModule).catch(err=>{err})},
  // {path:'',component:DashboardComponent,canActivate:[AuthGuardService]}
];
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    DashboardComponent,
    QuestionFormComponent,
    NavbarComponent,
    OptionComponent,
    VoteComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes),
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [QuickDataService,FormStateService,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
