import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTableRowComponent } from './cn-table-row.component';

describe('CnTableRowComponent', () => {
  let component: CnTableRowComponent;
  let fixture: ComponentFixture<CnTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
