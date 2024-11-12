import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ILoginResponse } from '../interfaces/types/login-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
   }

   login(name:string, password:string){
      return this.http.post<ILoginResponse>("/login", {name, password}).pipe(tap((value)=> {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("username", value.username)
      }))
   }
}
