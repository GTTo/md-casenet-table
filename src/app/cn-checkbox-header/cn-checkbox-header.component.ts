import {Component, Input, OnInit} from '@angular/core';
import {MdCheckboxChange} from "@angular/material";
import {SelectionService} from "../services/selection.service";

@Component({
  selector: 'cn-checkbox-header',
  templateUrl: './cn-checkbox-header.component.html',
  styleUrls: ['./cn-checkbox-header.component.scss']
})
export class CnCheckboxHeaderComponent implements OnInit {

  @Input() rows: any[];
  checked = false;
  indeterminate: boolean;

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
  }

  checkboxChanged(event: MdCheckboxChange): void {
    if (event.checked) {
      this.selectionService.addAllSelectedRows(this.rows);
    } else {
      this.selectionService.removeAllSelected();
    }
  }
}
