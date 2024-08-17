import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.component.html',
  styleUrls: ['./edit-vehicles.component.css']
})
export class EditVehiclesComponent implements OnInit {
  editvehicles:any={}
  sectionId:any;
  editdriver:any=[];

  constructor(
    private apiservice:ApiService,
    private actroute:ActivatedRoute,
    private navigate:Router
  ){}
  ngOnInit(): void {
    this.sectionId=this.actroute.snapshot.paramMap.get('id')
    console.log(this.sectionId);

    this.getdriver()
    this.getvehicle()
  }

  getdriver(){
    this.apiservice.getAlldrivers().subscribe({

      next:(res:any)=>{

        console.log(res);
         
        this.editdriver=res;
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  }


  getvehicle(){
    this.apiservice.getSinglevehicle(this.sectionId).subscribe({
      next:(res:any)=>{
        
        this.editvehicles=res;
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  

  edit(){
    this.apiservice.editvehicle(this.sectionId, this.editvehicles).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.navigate.navigateByUrl("")       
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  cancel(){
    this.navigate.navigateByUrl("")
  }
}
