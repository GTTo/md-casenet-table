import { Injectable } from '@angular/core';

@Injectable()
export class SelectionService {

  selection: any[];

  constructor() {
    this.selection = [];
  }

  addSelectedRow(row: any) {
    this.selection.push(row);
    console.log(this.selection);
  }

  removeSelectedRow(row: any) {
    const indexToRemove = this.selection.findIndex(obj => obj.id = row.id);
    this.selection.splice(indexToRemove, 1);
    console.log(this.selection);
  }

  addAllSelectedRows(rows: any[]): void {
     this.selection = rows;
     console.log(this.selection);
  }

  removeAllSelected(): void {
    this.selection = [];
    console.log(this.selection);
  }
}
