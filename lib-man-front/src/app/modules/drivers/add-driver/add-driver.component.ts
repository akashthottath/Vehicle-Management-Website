import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {

  adddrivers:any={}

  constructor(
    private apiservice:ApiService,
    private navigate:Router
  ){}

  
  submit(){
    const {Name, Phone,Email,Age }=this.adddrivers

    if( !Name || !Phone || !Email || !Age){
      alert("Details Are Not Entered Completely")      
    }else{
      this.apiservice.adddriver(this.adddrivers).subscribe({
        next:(res:any)=>{
          
          this.navigate.navigateByUrl("/drivers/driverlist")
        },error:(err:any)=>{
        
          console.log(err);
          
        }
      })
    }
  }

  cancel(){
    this.navigate.navigateByUrl("/drivers/driverlist")
    
  }

}
