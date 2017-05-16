import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-header-row',
  templateUrl: './cn-header-row.component.html',
  styleUrls: ['./cn-header-row.component.scss']
})
export class CnHeaderRowComponent implements OnInit {

  @Input() columns: String[];
  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
  }

}
