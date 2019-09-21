import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExtraInformationComponent } from './extra-information/extra-information.component';
import { PeriodDateComponent } from './period-date/period-date.component';
import { UserComponent } from './user/user.component';
import { NextPeriodDateComponent } from './next-period-date/next-period-date.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'ExtraInformation',
    component:ExtraInformationComponent,
    children:[
      {
        path:'periodDate',
        component:PeriodDateComponent
      }
    ]
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'nextPeriodDate',
        component:NextPeriodDateComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
