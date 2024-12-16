import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { advertiser } from '../classes/advertiser';


@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  url:string="http://localhost:8080/"
  constructor(public nuHttp: HttpClient) { }
   a:advertiser=new advertiser();

  register(A: advertiser): Observable<boolean> {
    alert("Register");
    debugger;
    return this.nuHttp.post<boolean>(`${this.url}register`, A);
  }
  
  // התחברות
  login(email: string, password: string): Observable<advertiser> {
    
    return this.nuHttp.get<advertiser>(`${this.url}login/${email}/${password}`)
  }
}


