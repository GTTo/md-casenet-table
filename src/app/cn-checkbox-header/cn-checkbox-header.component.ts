import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-checkbox-header',
  templateUrl: './cn-checkbox-header.component.html',
  styleUrls: ['./cn-checkbox-header.component.scss']
})
export class CnCheckboxHeaderComponent implements OnInit {

  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
