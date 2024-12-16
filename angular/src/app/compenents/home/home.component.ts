import { Component, OnInit } from '@angular/core';
import {ApartmentService} from 'src/app/services/apartment.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showPrice: boolean = false;
  showName: boolean = false;
  showCity: boolean = false;
  constructor(public myServ:ApartmentService) { }

  ngOnInit() {
    if(this.myServ.arrap.length==0)
       this.myServ.lodeApartment()  }
a(){
  this.myServ.lodeApartment() 
    this.showPrice =false;
    this.showName = false;
    this.showCity=false;
    this.myServ.lodeApartment() 
}
f(is:string){
  if(is=="showCity"){
    debugger
     this.showPrice =false;
     this.showName=false;
     this.showCity=true;
  }
  if(is=="showName"){
    debugger
    this.showPrice =false;
    this.showCity=false;
    this.showName =true;
  }
 if(is=="showPrice"){
    debugger
    this.showName = false;
    this.showCity=false;
    this.showPrice =true;
  }
}
      f1(city:string){
        debugger
       this. myServ.getApartmentCity(city).subscribe(x=>{this.myServ.arrap=x},err=>{console.log(err)})
      }
      f2(name: string) {
        this. myServ.getApartmentBya(name).subscribe(x=>{this.myServ.arrap=x},err=>{console.log(err)})

      }
      f3(from:number,to:number){
        this. myServ.getApartmentByPrice(from,to).subscribe(x=>{this.myServ.arrap=x},err=>{console.log(err)})

      }
      }
