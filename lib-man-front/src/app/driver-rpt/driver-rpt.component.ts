import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-driver-rpt',
  templateUrl: './driver-rpt.component.html',
  styleUrls: ['./driver-rpt.component.css']
})
export class DriverRptComponent implements OnInit{
  allvehicles:any=[];

  constructor(private apiservice:ApiService){}
  ngOnInit(): void {
    this.getAllvehiclesapi()
  }

  getAllvehiclesapi(){
    this.apiservice.getAllvehicle().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allvehicles=res;
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
