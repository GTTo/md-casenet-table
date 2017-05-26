import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnCheckboxHeaderComponent } from './cn-checkbox-header.component';
import {MdCheckboxModule} from '@angular/material';
import {SelectionService} from '../services/selection.service';

describe('CnCheckboxHeaderComponent', () => {
  let component: CnCheckboxHeaderComponent;
  let fixture: ComponentFixture<CnCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnCheckboxHeaderComponent ],
      imports: [MdCheckboxModule],
      providers: [SelectionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnCheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
