import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnRowComponent } from './cn-row.component';
import {CnCheckboxCellComponent} from '../cn-checkbox-cell/cn-checkbox-cell.component';
import {CnCellComponent} from '../cn-cell/cn-cell.component';
import {MdCheckboxModule} from '@angular/material';
import {NgModel} from '@angular/forms';
import {SelectionService} from '../services/selection.service';

describe('CnRowComponent', () => {
  let component: CnRowComponent;
  let fixture: ComponentFixture<CnRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModel,
        CnRowComponent,
        CnCellComponent,
        CnCheckboxCellComponent
      ],
      imports: [
        MdCheckboxModule,
      ],
      providers: [
        SelectionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
