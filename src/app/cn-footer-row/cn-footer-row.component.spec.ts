import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnFooterRowComponent } from './cn-footer-row.component';
import {CnCellComponent} from '../cn-cell/cn-cell.component';
import {CnTablePaginationComponent} from '../cn-table-pagination/cn-table-pagination.component';
import {NgModel} from '@angular/forms';
import {MdSelectModule} from '@angular/material';
import {PaginationService} from '../services/pagination.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CnFooterRowComponent', () => {
  let component: CnFooterRowComponent;
  let fixture: ComponentFixture<CnFooterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModel,
        CnFooterRowComponent,
        CnCellComponent,
        CnTablePaginationComponent
      ],
      imports: [
        MdSelectModule,
        NoopAnimationsModule
      ],
      providers: [
        PaginationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnFooterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
