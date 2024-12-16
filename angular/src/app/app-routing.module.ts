import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { NavComponent } from './compenents/nav/nav.component';
import { ConectComponent } from './compenents/conect/conect.component';
//מערך שבו נגדיר את הניתובים
const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"conect",component:ConectComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
