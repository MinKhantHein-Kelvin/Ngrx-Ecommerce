import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonLoadingComponent } from './components/button-loading/button-loading.component';
import { MaterialModule } from './common/material/material.module';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TableSkeletonComponent } from './components/skeleton/table-skeleton/table-skeleton.component';
import { UserModalComponent } from './components/modal/user-modal/user-modal.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AntdModule } from './common/antd/antd.module';
import en from '@angular/common/locales/en';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
registerLocaleData(en);
@NgModule({
  declarations: [
    InputBoxComponent,
    ButtonLoadingComponent,
    TableComponent,
    PaginationComponent,
    SelectBoxComponent,
    TableSkeletonComponent,
    UserModalComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxSkeletonLoaderModule,
    NgSelectModule,
    NgbModule,
    AntdModule
  ],
  exports: [
    InputBoxComponent,
    ButtonLoadingComponent,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    TableComponent,
    SelectBoxComponent,
    PaginationComponent,
    NgxSkeletonLoaderModule,
    UserModalComponent,
    BreadcrumbComponent,
    NgSelectModule,
    NgbModule,
    AntdModule
    // NgxDatesPickerModule
  ],
  providers: [DatePipe, { provide: NZ_I18N, useValue: en_US}],
})
export class SharedModule { }
