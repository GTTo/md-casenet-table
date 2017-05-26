import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnCheckboxCellComponent } from './cn-checkbox-cell.component';
import {MdCheckboxModule} from '@angular/material';
import {SelectionService} from '../services/selection.service';

describe('CnCheckboxCellComponent', () => {
  let component: CnCheckboxCellComponent;
  let fixture: ComponentFixture<CnCheckboxCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnCheckboxCellComponent ],
      imports: [MdCheckboxModule],
      providers: [SelectionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnCheckboxCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
