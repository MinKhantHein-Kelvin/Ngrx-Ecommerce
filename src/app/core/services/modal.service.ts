import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  openModal(content: any, modalConfig: any = {}) {
    this.modalRef = this.modalService.open(content, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      ...modalConfig,
    });
    return this.modalRef;
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  dismissModal() {
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }
}
