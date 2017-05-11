import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-table-row',
  templateUrl: './cn-table-row.component.html',
  styleUrls: ['./cn-table-row.component.css']
})
export class CnTableRowComponent implements OnInit {

  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

}
