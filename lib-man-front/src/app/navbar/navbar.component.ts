import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
public searchTerm:string=""

constructor(private apiservice:ApiService){}

search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.apiservice.search.next(this.searchTerm); 
}
}
