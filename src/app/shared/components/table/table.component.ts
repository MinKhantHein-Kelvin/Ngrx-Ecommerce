import { Component, Input } from '@angular/core';
import { tableHeader } from '../../../core/models/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableHeaderArray : tableHeader[] = [];
  @Input() tableDataSource : any[] = [];
  @Input() isLoading : boolean = false;

  ngOnInit(): void {

  }
}
