import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseUrl = 'https://dummyjson.com/'
  //private baseUrlPrduct = 'https://dummyjson.com/'

  constructor( private httpClient:HttpClient) { }
  
  authLogin(loginFormValue:any){
   return this.httpClient.post(this.baseUrl + 'auth/' + "login",loginFormValue)
  }

  getProfile(){
   return this.httpClient.get(this.baseUrl + 'auth/' + 'me')
  }

  getAllProduct(){
    return this.httpClient.get(this.baseUrl + 'products')
  }

  getAllUser(){
    return this.httpClient.get(this.baseUrl + 'users')
  }


}
