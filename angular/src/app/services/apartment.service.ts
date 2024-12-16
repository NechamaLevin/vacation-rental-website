import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartment } from '../classes/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
 
  url:string="http://localhost:8080/"
  constructor(public nuHttp:HttpClient) { }
  getApartmentCity(city:string):Observable<Array<apartment>>{
    debugger
    return this.nuHttp.get<Array<apartment>>(`${this.url}getApartmentCity/${city}`)
  }

  getApartmentByPrice(from:number,to:number):Observable<Array<apartment>>{
    return this.nuHttp.get<Array<apartment>>(`${this.url}getApartmentByPrice/${from}/${to}`)
  }
  getApartmentBya(fName:string):Observable<Array<apartment>>{
    debugger
    return this.nuHttp.get<Array<apartment>>(`${this.url}getApartmentBya/${fName}`)
  }
  getAllApartment():Observable<Array<apartment>>{
    return this.nuHttp.get<Array<apartment>>(`${this.url}getAllApartment`)
  }
  arrap:Array<apartment>=new Array<apartment>()
  lodeApartment(){
    this.getAllApartment().subscribe(x=>{this.arrap=x},err=>{console.log(err)})
  }
}

