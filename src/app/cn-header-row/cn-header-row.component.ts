import {Component, Input, OnInit} from '@angular/core';
import {CnOrderDirectionEnum} from '../cn-table/cn-table.component';

@Component({
  selector: 'cn-header-row',
  templateUrl: './cn-header-row.component.html',
  styleUrls: ['./cn-header-row.component.scss']
})
export class CnHeaderRowComponent implements OnInit {

  @Input() columns: any[];
  @Input() rows: any[];
  cnOrderDirectionEnum = CnOrderDirectionEnum; // hack to allow use of enums in templates
  constructor() { }

  ngOnInit() {
  }

  sortColumn(field: any) {
    console.log('SORT: ' + field.orderDir);
    switch (field.orderDir) {
      case CnOrderDirectionEnum.ASC:
        field.orderDir = CnOrderDirectionEnum.DESC;
        break;
      case CnOrderDirectionEnum.DESC:
        field.orderDir = CnOrderDirectionEnum.NONE;
        break;
      default:
        field.orderDir = CnOrderDirectionEnum.ASC;
    }
  }
}
