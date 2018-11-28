import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AircraftListComponent } from './aircrafts/aircraft-list/aircraft-list.component';
import { AircraftDetailComponent } from './aircrafts/aircraft-detail/aircraft-detail.component';
import { AircraftListItemComponent } from './aircrafts/aircraft-list/aircraft-list-item/aircraft-list-item.component';
import { NavbarLeftsideComponent } from './elements/navbar-leftside/navbar-leftside.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AircraftsComponent,
    AircraftListComponent,
    AircraftDetailComponent,
    AircraftListItemComponent,
    NavbarLeftsideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
