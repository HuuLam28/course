import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in.component";

const router : Routes = [
  {
    path: '',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class SignInRoutingModule {

}
