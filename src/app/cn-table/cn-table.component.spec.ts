import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTableComponent } from './cn-table.component';

describe('CnTableComponent', () => {
  let component: CnTableComponent;
  let fixture: ComponentFixture<CnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
