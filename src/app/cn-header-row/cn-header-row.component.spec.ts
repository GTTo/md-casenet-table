import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnHeaderRowComponent } from './cn-header-row.component';

describe('CnHeaderRowComponent', () => {
  let component: CnHeaderRowComponent;
  let fixture: ComponentFixture<CnHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnHeaderRowComponent ]
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
