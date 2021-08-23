import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionComponent } from './option/option.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { CdsModule } from '@cds/angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OptionComponent,
    QuestionComponent,
    NavbarComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
