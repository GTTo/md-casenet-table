import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MdCheckboxChange} from '@angular/material';
import {SelectionService} from '../services/selection.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cn-checkbox-cell',
  templateUrl: './cn-checkbox-cell.component.html',
  styleUrls: ['./cn-checkbox-cell.component.scss']
})
export class CnCheckboxCellComponent implements OnInit, OnDestroy {

  @Input() data: any;
  checked: boolean;
  sub: Subscription;

  constructor(private selectionService: SelectionService) {
    this.sub = selectionService.$allSelection.subscribe(value => {
      this.checked = value;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkboxChanged(event: MdCheckboxChange): void {
    this.checked = event.checked;
    if (this.checked) {
      this.selectionService.addSelectedRow(this.data);
    } else {
      this.selectionService.removeSelectedRow(this.data);
    }
  }
}
