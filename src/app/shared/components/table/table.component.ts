import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { tableHeader } from '../../../core/models/common';
import { UserList } from '../../../core/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() tableHeaderArray : tableHeader[] = [];
  @Input() tableDataSource : any[] = [];
  @Input() isLoading : boolean = false;
  @Input() isAction : boolean = true;
  @Output() editEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<any>();
  cdr = inject(ChangeDetectorRef)

  ngOnInit(): void {
    if(this.isAction){
      this.tableHeaderArray.push({
        header: 'Action',
        fieldname: 'action',
        type: 'action',
        width: 15
      });
      this.cdr.markForCheck();
    }
  }

  onEdit(row: any) {
    this.editEmitter.emit(row);
  }

  onDelete(row: any) {
    this.deleteEmitter.emit(row);
  }
}
