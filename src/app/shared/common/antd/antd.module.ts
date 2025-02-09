import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

const antdComponent : any = [
  NzDatePickerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    antdComponent
  ],
  exports: [
    antdComponent
  ]
})
export class AntdModule { }
