import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-table-row',
  templateUrl: './cn-table-row.component.html',
  styleUrls: ['./cn-table-row.component.scss']
})
export class CnTableRowComponent implements OnInit {

  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

  getFields(): String[] {
    return Object.keys(this.row);
  }
}
