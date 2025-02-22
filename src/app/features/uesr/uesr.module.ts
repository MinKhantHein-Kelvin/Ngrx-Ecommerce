import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UesrRoutingModule } from './uesr-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UesrRoutingModule,
    SharedModule
  ]
})
export class UesrModule { }
