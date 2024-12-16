import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { advertiser } from 'src/app/classes/advertiser';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myFrm:FormGroup=new FormGroup({
    "name":new FormControl(null,[Validators.required,Validators.pattern("[A-Za-zא-ת]*")]),
    "lastName":new FormControl(null,[Validators.required,Validators.pattern("[A-Za-zא-ת]*")]),
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "phone1":new FormControl(null,[Validators.required,Validators.pattern("^05[0-9]{8}$")]),
    "password":new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")])
    });
    
    getName(){
    return this.myFrm.controls["name"];
    }
    getlastName(){
      return this.myFrm.controls["lastName"];
    }
    getemail(){
      return this.myFrm.controls["email"];
    
    }
    getphone(){
     return this.myFrm.controls["phone1"]
    
    }
    getPasword(){
     return this.myFrm.controls["password"]
     
     }
  constructor(public mysrv:AdvertiserService,public router?: Router) { }

  ngOnInit() {
  }
  f()
{
 debugger
} 
 f1(name: string, phon_number_1: string, last_Name: string, email: string, phon_number_2: string, Password: string) {
  debugger
    let newA: advertiser = new advertiser();
    newA.fName = name;
    newA.phon1 = phon_number_1;
    newA.lName = last_Name;
    newA.email = email;
    newA.phon2 = phon_number_2;
    newA.password = Password;
    newA.id = "111";
    this.mysrv.register(newA).subscribe(response => {
    });
    this.router.navigate(['/conect']);
    }
    

}
