import {EventEmitter, Injectable} from '@angular/core';
import {CnOrderDirectionEnum} from '../cn-table/cn-table.component';

@Injectable()
export class SortService {

  sort: any;
  $sort: EventEmitter<any>;

  constructor() {
    this.sort = {};
    this.$sort = new EventEmitter();
  }

  sortColumn(field: any) {
    const prevSortOrder = this.sort[field.name];
    switch (prevSortOrder) {
      case CnOrderDirectionEnum.ASC:
        field.orderDir = CnOrderDirectionEnum.DESC;
        break;
      case CnOrderDirectionEnum.DESC:
        field.orderDir = CnOrderDirectionEnum.NONE;
        break;
      default:
        field.orderDir = CnOrderDirectionEnum.ASC;
    }
    this.sort[field.name] = field.orderDir;
    this.$sort.emit(field);
  }

  // TODO: Enhance the sort function for work with all fields in sorting
  sortRows(rows: any[]) {
    const sortingFields: string[] = Object.keys(this.sort);
    // let ordenacion = 'Ordenado por: ';
    // sortingFields.forEach((sortField) => {
    //   ordenacion += sortField + ' ' + CnOrderDirectionEnum[this.sort[sortField]] + ', ';
    // });
    // console.log(ordenacion);
    rows.sort((rowA, rowB) => {
      let result = 0;
      sortingFields.forEach((sortField) => {
        if (this.sort[sortField] === CnOrderDirectionEnum.NONE ){
          return;
        }
        const order: number = this.sort[sortField] === CnOrderDirectionEnum.ASC ? 1 : -1;
        if (rowA[sortField] > rowB[sortField]) {
          result = 1 * order;
          return;
        }

        if (rowA[sortField] < rowB[sortField]) {
          result = -1 * order;
          return;
        }
      });
      return result;
    });
  }
}
