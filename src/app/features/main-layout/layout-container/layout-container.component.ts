import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { MainIntercomService } from '../../../core/services/main-intercom.service';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent implements AfterViewInit,OnInit {
  deferredPrompt: any;
  showInstallButton = false;
  isCollapsed : boolean = false;
  isDarkTheme : boolean = false;
  cdr = inject(ChangeDetectorRef)
  router = inject(Router);
  private _authService = inject(AuthService);
  private _themeService = inject(ThemeService);
  public _mainInterComService = inject(MainIntercomService)
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

  @HostListener('window:beforeinstallprompt', ['$event'])


  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
    this.showInstallButton = true; // Show the "Download" button
  }
  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.isDarkTheme = document.body.classList.contains('dark-mode');
  }

  toggleTheme() {
    this._themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:870px)']).subscribe((res) => {
      if (res?.matches) {
        this.isCollapsed = true;
      } else {
        this.isCollapsed = false;
      }
      this.cdr.markForCheck();
    });
  }

  sidenavWidth(): string {
    return this.isCollapsed ? '60px' : '220px';
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  handleRoute = (route: string) : void => {
    if(route !== ''){
      this.router.navigate([route]);
    }else{
      this._authService.logout();
    }
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWA install prompt');
        } else {
          console.log('User dismissed the PWA install prompt');
        }
        this.deferredPrompt = null;
      });
    }
  }
}
