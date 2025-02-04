import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator';

const PrimengComponents : any = [
  CommonModule,
  InputGroupModule,
  InputGroupAddonModule,
  DividerModule,
  PasswordModule,
  RadioButtonModule,
  CalendarModule,
  TableModule,
  CardModule,
  BreadcrumbModule,
  PaginatorModule
];
@NgModule({
  declarations: [],
  imports: [
    PrimengComponents
  ],
  exports : [PrimengComponents]
})
export class PrimeNgModule { }
