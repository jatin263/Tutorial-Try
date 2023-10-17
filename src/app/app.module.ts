import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { SuccessAlertComponent } from './MyComponents/success-alert/success-alert.component';
import { WarningAlertComponent } from './MyComponents/warning-alert/warning-alert.component';
import { DataBindingComponent } from './MyComponents/data-binding/data-binding.component';
import { GameControlComponent } from './MyComponents/game-control/game-control.component';
import { OddCompComponent } from './MyComponents/odd-comp/odd-comp.component';
import { EvenCompComponent } from './MyComponents/even-comp/even-comp.component';
import { TryingDataBindingComponent } from './MyComponents/trying-data-binding/trying-data-binding.component';
import {AddDataComponent } from './MyComponents/trying-data-binding/add-data/add-data.component';
import {DisplayDataComponent } from './MyComponents/trying-data-binding/display-data/display-data.component';
import { Day1Component } from './day1/day1.component';
import { DataViewComponent } from './day1/data-view/data-view.component';
import { DataFormComponent } from './day1/data-form/data-form.component';
import { HomeComponent } from './project/home/home.component';
import { RegisterComponent } from './project/register/register.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './project/login/login.component';


const appRoute:Routes=[
  {path : '', component:HomeComponent},
  {path : 'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DataBindingComponent,
    GameControlComponent,
    OddCompComponent,
    EvenCompComponent,
    TryingDataBindingComponent,
    AddDataComponent,
    DisplayDataComponent,
    Day1Component,
    DataViewComponent,
    DataFormComponent,
    HomeComponent,
    RegisterComponent,
    ProjectComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
