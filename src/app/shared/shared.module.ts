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
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TableSkeletonComponent } from './components/skeleton/table-skeleton/table-skeleton.component';
import { UserModalComponent } from './components/modal/user-modal/user-modal.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    ButtonLoadingComponent,
    TableComponent,
    PaginationComponent,
    SelectBoxComponent,
    TableSkeletonComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    MaterialModule,
    NgxSkeletonLoaderModule
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
    PaginationComponent,
    NgxSkeletonLoaderModule,
    UserModalComponent
  ]
})
export class SharedModule { }
