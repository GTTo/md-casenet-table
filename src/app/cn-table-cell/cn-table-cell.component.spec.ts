import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTableCellComponent } from './cn-table-cell.component';

describe('CnTableCellComponent', () => {
  let component: CnTableCellComponent;
  let fixture: ComponentFixture<CnTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
