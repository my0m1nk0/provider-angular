import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    InputComponent,
    ListComponent
  ],
  exports: [
    ListComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
