import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component : LayoutContainerComponent,
    children : [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate : [authGuard]
      },
      {
        path: 'product',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
        canActivate : [authGuard]
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule),
        canActivate : [authGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('../uesr/uesr.module').then(m => m.UesrModule),
        canActivate : [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
