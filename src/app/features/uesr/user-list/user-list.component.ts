import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PageEvent, tableHeader } from '../../../core/models/common';
import { UserList } from '../../../core/models/user';
import { lastValueFrom, Observable } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { UserModalComponent } from '../../../shared/components/modal/user-modal/user-modal.component';
import { ModalService } from '../../../core/services/modal.service';
import { BreadCrumb } from '../../../core/models/breadcrumb';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  userDataList: UserList[] = [];
  searchVal : string = "";
  _userService = inject(UserService);
  cdr = inject(ChangeDetectorRef);
  modalService = inject(ModalService);

  isLoading: boolean = false;

  breadcrumbItems: BreadCrumb[] = [
    { label: 'Dashboard', url: '', ishide: false },
    { label: 'User List', url: '/admin/user', ishide: false },
  ];

  headerArray: tableHeader[] = [
    { header: 'Name', fieldname: 'name', type: 'text', width : 15 },
    { header: 'Email', fieldname: 'email', type: 'text', width : 20 },
    { header: 'Phone', fieldname: 'phone', type: 'text', width : 15 },
    { header: 'City', fieldname: 'city', type: 'text', width : 15 },
    { header: 'Street', fieldname: 'street', type: 'text', width : 15 },
  ];

  dataSource: UserList[] = [];

  async ngOnInit(): Promise<void> {
    await this.getAllUser();
  }

  getAllUser = async (): Promise<void> => {
    try {
      this.isLoading = true;
      const res: UserList[] = await lastValueFrom(
        this._userService.getAllUsers()
      );
      if (res.length > 0) {
        this.dataSource = res.map((user: any) => ({
          id: user.id,
          name: `${user.name.firstname} ${user.name.lastname}`,
          email: user.email,
          password: user.password,
          phone: user.phone,
          city: user.address.city,
          street: user.address.street,
        }));
      }
    } catch (error) {
    } finally {
      this.isLoading = false;
      this.cdr.markForCheck();
    }
  };

  onSearch = () => {
    console.log(this.searchVal);

  }

  OnEdit = (data : UserList) => {
    const modalRef = this.modalService.openModal(UserModalComponent, {
      size: 'lg',
    });

    modalRef.componentInstance.userData = data;
  }
}
