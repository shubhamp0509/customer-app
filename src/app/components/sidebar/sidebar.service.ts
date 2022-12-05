import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  url = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }


  getCustomers(){
    return this.http.get(this.url);
  }
  addCustomer(data:any){
    return this.http.post(this.url,data);
  }
}
