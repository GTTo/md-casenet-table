import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-checkbox-cell',
  templateUrl: './cn-checkbox-cell.component.html',
  styleUrls: ['./cn-checkbox-cell.component.scss']
})
export class CnCheckboxCellComponent implements OnInit {

  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
