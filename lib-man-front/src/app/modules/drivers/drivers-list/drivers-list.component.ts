import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit{
  alldrivers:any=[]
  searchKey:string="";
  constructor(private apiservice:ApiService){}

  ngOnInit(): void {
    this.getAllDriversapi()
  }


  getAllDriversapi(){
    this.apiservice.getAlldrivers().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.alldrivers=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  delete(id:any){
    this.apiservice.deletedriver(id).subscribe({
      next:(res:any)=>{
        this.getAllDriversapi()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }


}
