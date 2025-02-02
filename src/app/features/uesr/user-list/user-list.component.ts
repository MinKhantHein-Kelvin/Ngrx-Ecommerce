import { Component } from '@angular/core';
import { tableHeader } from '../../../core/models/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  breadcrumbItems = [
    { label: 'Dashboard', routerLink: ['/admin/dashboard'] },
    { label: 'Products', routerLink: ['/admin/product'] },
    { label: 'User', routerLink: ['/admin/user'] }
  ];

  headerArray : tableHeader[] = [
    { header : 'Code', fieldname : 'code', type : 'text'},
    { header : 'Name', fieldname : 'name', type : 'text'},
    { header : 'Title', fieldname : 'title', type : 'text'},
    { header : 'Desc', fieldname : 'desc', type : 'text'},
    { header : 'No', fieldname : 'no', type : 'text'},
    { header : 'Status', fieldname : 'status', type : 'number'}
  ];

  dataSource : any[] = [
    {
      code: 'code1',
      name: 'name1',
      title: 'title1',
      desc: 'desc1',
      no: 'no1',
      status:'status1'
    },
    {
      code: 'code2',
      name: 'name2 dasfdsf sdafsdfsf',
      title: 'title2',
      desc: 'desc2',
      no: 'no2',
      status:'status2'
    },{
      code: 'code3',
      name: 'name3',
      title: 'title3',
      desc: 'desc3',
      no: 'no3',
      status:'status3'
    }
  ]
}
