import {Component, Input, OnInit} from '@angular/core';
import {MdCheckboxChange} from "@angular/material";
import {SelectionService} from "../services/selection.service";

@Component({
  selector: 'cn-checkbox-cell',
  templateUrl: './cn-checkbox-cell.component.html',
  styleUrls: ['./cn-checkbox-cell.component.scss']
})
export class CnCheckboxCellComponent implements OnInit {

  @Input() data: any;
  checked: boolean;

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
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
