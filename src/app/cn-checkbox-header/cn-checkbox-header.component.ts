import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MdCheckboxChange} from '@angular/material';
import {SelectionService} from '../services/selection.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cn-checkbox-header',
  templateUrl: './cn-checkbox-header.component.html',
  styleUrls: ['./cn-checkbox-header.component.scss']
})
export class CnCheckboxHeaderComponent implements OnInit, OnDestroy {

  @Input() rows: any[];
  checked: boolean;
  indeterminate: boolean;
  sub: Subscription;

  constructor(private selectionService: SelectionService) {
    this.sub = selectionService.$selection.subscribe(selection => {
      this.checked = selection.length === this.rows.length;
      this.indeterminate = selection.length !== this.rows.length && selection.length !== 0;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  checkboxChanged(event: MdCheckboxChange): void {
    if (event.checked) {
      this.selectionService.addAllSelectedRows(this.rows);
    } else {
      this.selectionService.removeAllSelected();
    }
  }
}
