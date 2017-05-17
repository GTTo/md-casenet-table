import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-row',
  templateUrl: './cn-row.component.html',
  styleUrls: ['./cn-row.component.scss']
})
export class CnRowComponent implements OnInit {

  @Input() row: any;
  @Input() columns: any[];

  constructor() { }

  ngOnInit() {
  }

  getFields(): String[] {
    const fields = [];
    this.columns.forEach((column) => {
      fields.push(column.name);
    });
    return fields;
  }
}
