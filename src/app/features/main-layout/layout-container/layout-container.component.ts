import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
  isCollapsed : boolean = false;
  sideBarItemList = [
    {
      label: 'Dashboard',
      route: '/admin/dashboard',
      icon: './assets/images/layout/dashboard.png',
      iconActive: './assets/images/layout/dashboard-active.png',
    },
    {
      label: 'Products',
      route: '/admin/product',
      icon: './assets/images/layout/product.png',
      iconActive: './assets/images/layout/product-active.png',
    },
    {
      label: 'Users',
      route: '/admin/user',
      icon: './assets/images/layout/user.png',
      iconActive: './assets/images/layout/user-active.png',
    }
  ]

  sidenavWidth(): string {
    return this.isCollapsed ? '60px' : '220px';
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
