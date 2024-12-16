import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { advertiser } from 'src/app/classes/advertiser';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-conect',
  templateUrl: './conect.component.html',
  styleUrls: ['./conect.component.css']
})
export class ConectComponent implements OnInit {
  @Input() me:advertiser=new advertiser();
  me1:advertiser=new advertiser();
  constructor(public myserv?:AdvertiserService,public router?: Router) { }

  ngOnInit() {
  }

  c(email: string, password: string) { 
   
    this.myserv.login(email, password).subscribe(x => {
        this.myserv.a = x;

        if (!this.myserv.a) {
            debugger;
            this.router.navigate(['/login']);
        } else {
            debugger;
            this.router.navigate(['/home']);
        }
    });
}

}
