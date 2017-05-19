import {EventEmitter, Injectable} from '@angular/core';

export interface ICnPagination {
  pageSize: number;
  currentPage: number;
  offset: number;
}

@Injectable()
export class PaginationService {

  paginator: ICnPagination;
  $paginator: EventEmitter<ICnPagination>;

  constructor() {
    this.paginator = {
      pageSize: 5,
      currentPage: 1,
      offset: 0
    };
    this.$paginator = new EventEmitter();
  }

  pageUp() {
    this.paginator.currentPage++;
    this.paginator.offset += this.paginator.pageSize;
    this.$paginator.emit(this.paginator);
  }

  pageDown() {
    if (this.paginator.currentPage > 1) {
      this.paginator.currentPage--;
      this.paginator.offset -= this.paginator.pageSize;
    }
    this.$paginator.emit(this.paginator);
  }

  setPageSize(value: number) {
    this.paginator.pageSize = value;
    this.$paginator.emit(this.paginator);
  }

}
