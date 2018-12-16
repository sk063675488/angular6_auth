import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }
  getUser():Observable<any>{
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  };
  getUserDetails(id:number):Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
}
