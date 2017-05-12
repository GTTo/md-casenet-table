import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-row',
  templateUrl: './cn-row.component.html',
  styleUrls: ['./cn-row.component.scss']
})
export class CnRowComponent implements OnInit {

  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

  getFields(): String[] {
    return Object.keys(this.row);
  }
}
