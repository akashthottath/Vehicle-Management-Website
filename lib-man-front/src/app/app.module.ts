import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { EditVehiclesComponent } from './edit-vehicles/edit-vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { DriverRptComponent } from './driver-rpt/driver-rpt.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddVehiclesComponent,
    EditVehiclesComponent,
    FilterPipe,
    DriverRptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
