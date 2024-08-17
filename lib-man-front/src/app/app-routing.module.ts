import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { EditVehiclesComponent } from './edit-vehicles/edit-vehicles.component';
import { DriverRptComponent } from './driver-rpt/driver-rpt.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"add",component:AddVehiclesComponent},
{path:"edit/:id",component:EditVehiclesComponent},
{ path: 'drivers', loadChildren: () => import('./modules/drivers/drivers.module').then(m => m.DriversModule) },
{ path:"driverrpt",component:DriverRptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
