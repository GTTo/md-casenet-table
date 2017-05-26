import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SelectionService {

  selection: any[];
  $selection: EventEmitter<any[]>;
  $allSelection: EventEmitter<boolean>;

  constructor() {
    this.selection = [];
    this.$selection = new EventEmitter();
    this.$allSelection = new EventEmitter();
  }

  addSelectedRow(row: any) {
    this.selection.push(row);
    this.$selection.emit(this.selection); // It emits an event with the selection array after add the element
  }

  removeSelectedRow(row: any) {
    const indexToRemove = this.selection.findIndex(obj => obj.id === row.id);
    if (indexToRemove === -1) { return; }

    this.selection.splice(indexToRemove, 1);
    this.$selection.emit(this.selection); // It emits an event with the selection array after remove the element
  }

  addAllSelectedRows(rows: any[]): void {
     const selection = [];
     rows.forEach((row) => {
       selection.push(row);
     });
     this.selection = selection;
     this.$selection.emit(this.selection);
     this.$allSelection.emit(true); // it emit an event with *true* value for checkboxes
  }

  removeAllSelected(): void {
    this.selection = [];
    this.$selection.emit(this.selection);
    this.$allSelection.emit(false); // it emit an event with *false* value for checkboxes
  }
}
