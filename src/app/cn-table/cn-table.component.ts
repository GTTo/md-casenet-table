import {Component, Input, OnInit} from '@angular/core';


export enum CnOrderDirectionEnum {
  NONE,
  ASC,
  DESC
}

export interface ICnTableColumn {
  name: string;
  title: string;
  tooltip: string;
  orderDir: CnOrderDirectionEnum;
}

@Component({
  selector: 'cn-table',
  templateUrl: './cn-table.component.html',
  styleUrls: ['./cn-table.component.scss']
})
export class CnTableComponent implements OnInit {

  @Input() rows: any[];
  @Input() columns: any[];

  constructor() { }

  ngOnInit() {
  }

}
