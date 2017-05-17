import {Component, Input, OnInit} from '@angular/core';

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
