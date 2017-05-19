import {Component, Input, OnInit} from '@angular/core';
import {CnOrderDirectionEnum} from '../cn-table/cn-table.component';
import {SortService} from '../services/sort.service';

@Component({
  selector: 'cn-header-row',
  templateUrl: './cn-header-row.component.html',
  styleUrls: ['./cn-header-row.component.scss']
})
export class CnHeaderRowComponent implements OnInit {

  @Input() columns: any[];
  @Input() rows: any[];
  cnOrderDirectionEnum = CnOrderDirectionEnum; // hack to allow use of enums in templates
  constructor(private sortService: SortService) { }

  ngOnInit() {
  }

  sortColumn(field: any) {
    this.sortService.sortColumn(field);
  }

}
