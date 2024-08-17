import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { DriverNavComponent } from './driver-nav/driver-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersPipe } from './pipes/users.pipe';




@NgModule({
  declarations: [
    DriversComponent,
    DriversListComponent,
    AddDriverComponent,
    EditDriverComponent,
    DriverNavComponent,
    UsersPipe
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    HttpClientModule,
    FormsModule

  ]
})
export class DriversModule { }
