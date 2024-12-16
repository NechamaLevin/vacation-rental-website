import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './compenents/nav/nav.component';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { ConectComponent } from './compenents/conect/conect.component';
import { MyPipePipe } from './pipe/my-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangelookDirective } from './changelook.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    ConectComponent,
    MyPipePipe,
    ChangelookDirective
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
