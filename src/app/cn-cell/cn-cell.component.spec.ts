import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnCellComponent } from './cn-cell.component';

describe('CnCellComponent', () => {
  let component: CnCellComponent;
  let fixture: ComponentFixture<CnCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
