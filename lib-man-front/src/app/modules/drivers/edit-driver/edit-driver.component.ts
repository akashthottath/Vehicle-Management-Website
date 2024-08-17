import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  editdriver:any={}
  sectionId:any

  constructor(
    private apiservice:ApiService,
    private actroute:ActivatedRoute,
    private navigate:Router
  ){}


  ngOnInit(): void {
    this.sectionId=this.actroute.snapshot.paramMap.get('id')
    console.log(this.sectionId);


    this.getdriver()
    
  }
// already existing driver getting(single)
  getdriver(){
    this.apiservice.getSingledriver(this.sectionId).subscribe({
      next:(res:any)=>{
        // 
        this.editdriver=res
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  edit(){
    this.apiservice.editdriver(this.sectionId, this.editdriver).subscribe({
      next:(res:any)=>{
        console.log(res);   
        this.navigate.navigateByUrl("/drivers/driverlist")
      },error:(err:any)=>{
        console.log("error found"+err);

        
      }
    })
  }
  cancel(){
    // this.getdriver()
    this.navigate.navigateByUrl("/drivers/driverlist")

  }
}
