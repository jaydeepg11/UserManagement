import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MainnavbarComponent } from './Navbar/mainnavbar/mainnavbar.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { MainDashboardComponent } from './Dashboard/main-dashboard/main-dashboard.component';
import { InformationComponent } from './Dashboard/main-dashboard/information/information.component';
import { AddressComponent } from './Dashboard/main-dashboard/address/address.component';
import { MapComponent } from './Dashboard/main-dashboard/map/map.component';
import { LinkComponent } from './Dashboard/main-dashboard/link/link.component';
import { AdminaboutUsComponent } from './about/adminabout-us/adminabout-us.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainDashboardComponent,
    InformationComponent,
    AddressComponent,
    MapComponent,
    LinkComponent,
    AdminaboutUsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
