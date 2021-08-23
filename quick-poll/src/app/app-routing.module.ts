import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {path:'user',loadChildren:()=> import('./user/user.module').then(mdl=> mdl.UserModule)},
  {path:'',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
