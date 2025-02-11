import { ChangeDetectionStrategy, Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { BreadCrumb } from '../../../core/models/breadcrumb';
import { Client } from '../../../core/utils/client.util';
import { OrderService } from '../../../core/services/order.service';
import { lastValueFrom } from 'rxjs';
import { tableHeader } from '../../../core/models/common';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrl: './order-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderContainerComponent implements OnInit {
  searchVal: string = '';
  isLoading: boolean = false;
  breadcrumbItems: BreadCrumb[] = [
    { label: 'Dashboard', url: '', ishide: false },
    { label: 'Order List', url: '/admin/order', ishide: false },
  ];

  todayDate: Date = new Date();
  startDate : Date = new Date('2020-01-01');
  endDate : Date = new Date('2020-03-31');
  _util : Client = new Client();
  _orderService = inject(OrderService);
  cdr = inject(ChangeDetectorRef)
  ordersList: any[] = [];

  headerArray: tableHeader[] = [
      { header: 'Order ID', fieldname: 'id', type: 'text', width: 15 },
      { header: 'Customer ID', fieldname: 'userId', type: 'text', width: 15 },
      { header: 'Order Date', fieldname: 'date', type: 'date', width: 20 },
      { header: 'Total Items', fieldname: 'totalItems', type: 'text', width: 15 },
      { header: 'Status', fieldname: 'status', type: 'status', width: 10 }
    ];

  constructor() {
    // this.startDate = new Date(this.startDate.getFullYear(), this.todayDate.getMonth(), 1);
    // this.endDate = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, 0);
  }

  ngOnInit(): void {
    this.getAllOrderList();
  }

  onSearch = async () => {
    await this.getAllOrderList();
  };

  getAllOrderList = async () => {
    try {
      this.isLoading = true;
      const reqData = {
        startDate: this._util.changeDateObjectToString(this.startDate),
        endDate: this._util.changeDateObjectToString(this.endDate)
      }

      const response : any = await lastValueFrom(this._orderService.getAllOrderList(reqData));
      this.ordersList = response;
      console.log(response);
    } catch (error) {

    }finally{
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

}
