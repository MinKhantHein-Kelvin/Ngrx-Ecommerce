import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadCrumb } from '../../../core/models/breadcrumb';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrl: './order-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderContainerComponent {
  searchVal: string = '';
  breadcrumbItems: BreadCrumb[] = [
    { label: 'Dashboard', url: '', ishide: false },
    { label: 'Order List', url: '/admin/order', ishide: false },
  ];

  todayDate: Date = new Date();
  fromDate : Date = new Date();
  toDate : Date = new Date();

  constructor() {
    this.fromDate = new Date(this.fromDate.getFullYear(), this.todayDate.getMonth(), 1);
    this.toDate = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, 0);
  }

  onSearch = () => {};

}
