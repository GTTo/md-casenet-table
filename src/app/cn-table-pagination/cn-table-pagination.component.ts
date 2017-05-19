import {Component, Input, OnInit} from '@angular/core';
import {ICnPagination, PaginationService} from '../services/pagination.service';

@Component({
  selector: 'cn-table-pagination',
  templateUrl: './cn-table-pagination.component.html',
  styleUrls: ['./cn-table-pagination.component.scss']
})
export class CnTablePaginationComponent implements OnInit {

  @Input() rows: any[];
  paginator: ICnPagination;

  constructor(private paginationService: PaginationService) {
    this.paginator = paginationService.paginator;
  }

  ngOnInit() {
  }

  next() {
    if ((this.paginator.currentPage * this.paginator.pageSize) < this.rows.length) {
      this.paginationService.pageUp();
    }
  }

  previous() {
    this.paginationService.pageDown();
  }
}
