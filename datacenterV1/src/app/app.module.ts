import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MetricComponent } from './components/metric/metric.component';
import { NodeComponent } from './components/node/node.component';
import { NodeRowComponent } from './components/node-row/node-row.component';
import { NodeDetailsComponent } from './components/node-details/node-details.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MetricComponent,
    NodeComponent,
    NodeRowComponent,
    NodeDetailsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA],
  entryComponents:[NodeDetailsComponent,AlertComponent]
})
export class AppModule { }
