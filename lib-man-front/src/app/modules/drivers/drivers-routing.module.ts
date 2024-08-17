import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';

const routes: Routes = [
  { path: '', component: DriversComponent },
  { path: "driverlist", component:DriversListComponent},
  { path: "add-driver", component:AddDriverComponent},
  { path: "edit-driver/:id", component:EditDriverComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
