import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

const MODULE_EXPORT = [
  MatSlideToggleModule,
  BrowserAnimationsModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULE_EXPORT
  ],
  exports: [
    ...MODULE_EXPORT
  ]
})
export class MaterialModule { }
