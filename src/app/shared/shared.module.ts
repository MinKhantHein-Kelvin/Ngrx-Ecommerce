import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonLoadingComponent } from './components/button-loading/button-loading.component';
import { PrimeNgModule } from './common/primeng/primeng.module';
import { MaterialModule } from './common/material/material.module';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    ButtonLoadingComponent,
    TableComponent,
    PaginationComponent,
    SelectBoxComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    MaterialModule
  ],
  exports: [
    InputBoxComponent,
    ButtonLoadingComponent,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    MaterialModule,
    TableComponent,
    SelectBoxComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
