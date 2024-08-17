import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allvehicles:any=[];
  searchKey:string="";
  seperateView:any=[];


  constructor(private apiservice:ApiService){}


  ngOnInit(): void {
    this.getAllvehiclesapi()

    this.apiservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }



  getAllvehiclesapi(){
    this.apiservice.getAllvehicle().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allvehicles=res;
        this.seperateView=res;
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  delete(id:any){
    this.apiservice.deletevehicle(id).subscribe({
      next:(res:any)=>{
        this.getAllvehiclesapi()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  // seperate view
  viewAll(){
    this.seperateView=this.allvehicles.filter((res:any)=>{
      if(res.assignedname){
        return res;
      }
    })
  }

  assignedView(){
    this.seperateView=this.allvehicles.filter((res:any)=>{
      if(res.assignedname.length>0){
        return res;
      }
    })
  }

  unassignedView(){
    this.seperateView=this.allvehicles.filter((res:any)=>{
      if(res.assignedname.length==0){
        return res;
      }
    })
  }


}
