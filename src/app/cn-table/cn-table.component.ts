import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SortService} from '../services/sort.service';
import {PaginationService} from '../services/pagination.service';


export enum CnOrderDirectionEnum {
  NONE,
  ASC,
  DESC
}

export interface ICnTableColumn {
  name: string;
  title: string;
  tooltip: string;
  orderDir: CnOrderDirectionEnum;
}

@Component({
  selector: 'cn-table',
  templateUrl: './cn-table.component.html',
  styleUrls: ['./cn-table.component.scss']
})
export class CnTableComponent implements OnInit, OnDestroy {

  @Input() rows: any[];
  @Input() columns: any[];
  sub: Subscription;
  subPagination: Subscription;

  offset: number;
  to: number;

  constructor(private sortService: SortService, private paginationService: PaginationService) {
    this.sub = this.sortService.$sort.subscribe((field) => {
      this.sortService.sortRows(this.rows);
    });
    this.subPagination = this.paginationService.$paginator.subscribe((pagination) => {
      this.offset = pagination.offset;
      this.to = pagination.offset + pagination.pageSize;
    });
    this.paginationService.setPageSize(this.paginationService.paginator.pageSize);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subPagination.unsubscribe();
  }

}
