import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AircraftListComponent } from './aircrafts/aircraft-list/aircraft-list.component';
import { AircraftDetailComponent } from './aircrafts/aircraft-detail/aircraft-detail.component';
import { AircraftListItemComponent } from './aircrafts/aircraft-list/aircraft-list-item/aircraft-list-item.component';
import { NavbarLeftsideComponent } from './elements/navbar-leftside/navbar-leftside.component';
import { HomeComponent } from './home/home.component';
import { AircraftFormComponent } from './aircrafts/aircraft-form/aircraft-form.component';
import { RouteFormComponent } from './routes/route-form/route-form.component';
import { RouteListComponent } from './routes/route-list/route-list.component';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fleet', component: AircraftListComponent},
  { path: 'addaircraft', component: AircraftFormComponent},
  { path: 'addroute', component: RouteFormComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AircraftsComponent,
    AircraftListComponent,
    AircraftDetailComponent,
    AircraftListItemComponent,
    NavbarLeftsideComponent,
    HomeComponent,
    AircraftFormComponent,
    RouteFormComponent,
    RouteListComponent,
    RouteDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
