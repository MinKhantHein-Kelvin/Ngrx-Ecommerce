import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonLoadingComponent } from './components/button-loading/button-loading.component';



@NgModule({
  declarations: [
    InputBoxComponent,
    ButtonLoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputBoxComponent,
    ButtonLoadingComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
