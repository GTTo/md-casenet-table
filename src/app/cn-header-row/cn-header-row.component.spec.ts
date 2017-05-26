import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnHeaderRowComponent } from './cn-header-row.component';
import {CnCheckboxHeaderComponent} from '../cn-checkbox-header/cn-checkbox-header.component';
import {MdCheckboxModule, MdTooltipModule} from '@angular/material';
import {CnCellComponent} from '../cn-cell/cn-cell.component';
import {SortService} from '../services/sort.service';
import {SelectionService} from '../services/selection.service';

describe('CnHeaderRowComponent', () => {
  let component: CnHeaderRowComponent;
  let fixture: ComponentFixture<CnHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CnHeaderRowComponent,
        CnCellComponent,
        CnCheckboxHeaderComponent
      ],
      imports: [
        MdTooltipModule,
        MdCheckboxModule
      ],
      providers: [
        SortService,
        SelectionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
