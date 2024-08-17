import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // search
    public search =new BehaviorSubject<string>("");
    
  SERVER_URL='http://localhost:5000'
  
  constructor( private http:HttpClient) { }


    // adddriver
    adddriver(data:any){
      return this.http.post(`${this.SERVER_URL}/lib/drivers/adddriver`,data)
     }
    
    //  get all drivers
     getAlldrivers(){
      return this.http.get(`${this.SERVER_URL}/lib/drivers/getdriver`)
    }

  // get single driver
  getSingledriver(id:any){
    return this.http.get(`${this.SERVER_URL}/lib/drivers/view/${id}`)
  }

  // delete product
  deletedriver(id:any){
    return this.http.delete(`${this.SERVER_URL}/lib/drivers/driver-delete/${id}`)
  }

  // editdriver
    editdriver(id:any, data:any){
      return this.http.put(`${this.SERVER_URL}/lib/drivers/edit-driver/${id}`, data)
    }

    // ----------------vehicle---------------------
      // add vehicles
      addvehicles(data:any){
        return this.http.post(`${this.SERVER_URL}/lib/vehicles/addvehicle`,data)
       }
      
      //  get all vehicles
       getAllvehicle(){
        return this.http.get(`${this.SERVER_URL}/lib/vehicles/getcars`)
      }
  
    // get single vehicle
    getSinglevehicle(id:any){
      return this.http.get(`${this.SERVER_URL}/lib/vehicles/view/${id}`)
    }
  // delete vehicles
  deletevehicle(id:any){
    return this.http.delete(`${this.SERVER_URL}/lib/vehicles/car-delete/${id}`)
  }
  // edit vehicles
  editvehicle(id:any, data:any){
    return this.http.put(`${this.SERVER_URL}/lib/vehicles/edit-vehicle/${id}`, data)
  }


}
