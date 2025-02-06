import { Component, Input } from '@angular/core';
import { BreadCrumb } from '../../../core/models/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() breadCrumb : BreadCrumb[] = [];
  @Input() isNew : boolean = false;
  language : string = 'mya';

  constructor(){
    var storelang = localStorage.getItem('language');
    this.language = storelang ? storelang : this.language;
  }

  get filteredBreadCrumb(): BreadCrumb[] {
    return this.breadCrumb.filter((item:BreadCrumb) => !item.ishide);
  }
}
