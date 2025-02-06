import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductContainerComponent } from './product-container/product-container.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductContainerComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
