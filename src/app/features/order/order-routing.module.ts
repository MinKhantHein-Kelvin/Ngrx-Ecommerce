import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainerComponent } from './order-container/order-container.component';

const routes: Routes = [
  {
    path : '',
    component: OrderContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
