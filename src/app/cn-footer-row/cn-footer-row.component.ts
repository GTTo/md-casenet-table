import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-footer-row',
  templateUrl: './cn-footer-row.component.html',
  styleUrls: ['./cn-footer-row.component.scss']
})
export class CnFooterRowComponent implements OnInit {

  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
  }

  getAllRowCount(): number {
    return this.rows ? this.rows.length : 0;
  }
}
