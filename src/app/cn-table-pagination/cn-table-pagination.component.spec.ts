import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTablePaginationComponent } from './cn-table-pagination.component';

describe('CnTablePaginationComponent', () => {
  let component: CnTablePaginationComponent;
  let fixture: ComponentFixture<CnTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnTablePaginationComponent ]
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
