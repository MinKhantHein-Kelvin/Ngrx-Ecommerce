import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent implements AfterViewInit {
  isCollapsed : boolean = false;
  // private observer = inject(BreakpointObserver);
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
    },
    {
      label: 'Order',
      route: '/admin/order',
      icon: './assets/images/layout/order.png',
      iconActive: './assets/images/layout/order-active.png',
    },
    {
      label: 'Log Out',
      route: '',
      icon: './assets/images/layout/logout.png',
      iconActive: './assets/images/layout/logout.png',
    }
  ];
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:870px)']).subscribe((res) => {
      if (res?.matches) {
        this.isCollapsed = true;
      } else {
        this.isCollapsed = false;
      }
    });
  }

  sidenavWidth(): string {
    return this.isCollapsed ? '60px' : '220px';
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
