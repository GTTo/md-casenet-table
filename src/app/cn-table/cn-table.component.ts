import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SortService} from '../services/sort.service';


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
export class CnTableComponent implements OnInit, OnDestroy {

  @Input() rows: any[];
  @Input() columns: any[];
  sub: Subscription;

  constructor(private sortService: SortService) {
    this.sub = this.sortService.$sort.subscribe((field) => {
      this.sortService.sortRows(this.rows);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
