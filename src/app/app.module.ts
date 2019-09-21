import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExtraInformationComponent } from './extra-information/extra-information.component';
import { UserComponent } from './user/user.component';
import { PeriodDateComponent } from './period-date/period-date.component';
import { NextPeriodDateComponent } from './next-period-date/next-period-date.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExtraInformationComponent,
    UserComponent,
    PeriodDateComponent,
    NextPeriodDateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
