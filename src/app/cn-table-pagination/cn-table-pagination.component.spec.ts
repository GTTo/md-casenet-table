import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTablePaginationComponent } from './cn-table-pagination.component';
import {CnCellComponent} from '../cn-cell/cn-cell.component';
import {MdSelect, MdSelectModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PaginationService} from '../services/pagination.service';
import {NgModel} from '@angular/forms';

describe('CnTablePaginationComponent', () => {
  let component: CnTablePaginationComponent;
  let fixture: ComponentFixture<CnTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModel,
        CnTablePaginationComponent,
        CnCellComponent
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
    fixture = TestBed.createComponent(CnTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
