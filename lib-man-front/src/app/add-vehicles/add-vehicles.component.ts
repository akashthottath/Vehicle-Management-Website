import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent {
  addvehicle:any={}

  constructor(
    private apiservice:ApiService,
    private navigate:Router
  ){}

  
  submit(){
    const {Name,Image,Brand,Price}=this.addvehicle

    if( !Name || !Image || !Brand || !Price){
      alert("Details Are Not Entered Completely")      
    }else{
      this.apiservice.addvehicles(this.addvehicle).subscribe({
        next:(res:any)=>{
          console.log(res);          
          this.navigate.navigateByUrl("")
        },error:(err:any)=>{        
          console.log(err);
          
        }
      })
    }
  }

  cancel(){
    this.navigate.navigateByUrl("")
    
  }
}
