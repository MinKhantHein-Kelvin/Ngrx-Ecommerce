import { AfterViewInit, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserList } from '../../../../core/models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent implements AfterViewInit {
  @Input() userData? : UserList ;


  constructor(public activeModal: NgbActiveModal) {

  }

  ngAfterViewInit(): void {
    console.log(this.userData);
  }

  close() {
    this.activeModal.close();
  }
}
