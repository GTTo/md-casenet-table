import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTableComponent } from './cn-table.component';
import {CnHeaderRowComponent} from '../cn-header-row/cn-header-row.component';
import {CnRowComponent} from '../cn-row/cn-row.component';
import {CnFooterRowComponent} from '../cn-footer-row/cn-footer-row.component';
import {CnCheckboxHeaderComponent} from '../cn-checkbox-header/cn-checkbox-header.component';
import {SelectionService} from '../services/selection.service';
import {SortService} from '../services/sort.service';
import {MdCheckboxModule, MdSelectModule, MdTooltipModule} from '@angular/material';
import {CnCellComponent} from '../cn-cell/cn-cell.component';
import {PaginationService} from '../services/pagination.service';
import {CnCheckboxCellComponent} from '../cn-checkbox-cell/cn-checkbox-cell.component';
import {CnTablePaginationComponent} from '../cn-table-pagination/cn-table-pagination.component';
import {NgModel} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CnTableComponent', () => {
  let component: CnTableComponent;
  let fixture: ComponentFixture<CnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModel,
        CnTableComponent,
        CnHeaderRowComponent,
        CnRowComponent,
        CnFooterRowComponent,
        CnCheckboxHeaderComponent,
        CnCheckboxCellComponent,
        CnCellComponent,
        CnTablePaginationComponent
      ],
      imports: [
        MdTooltipModule,
        MdCheckboxModule,
        MdSelectModule,
        NoopAnimationsModule
      ],
      providers: [
        SortService,
        SelectionService,
        PaginationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
