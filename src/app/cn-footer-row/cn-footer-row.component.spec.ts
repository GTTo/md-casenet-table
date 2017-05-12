import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnFooterRowComponent } from './cn-footer-row.component';

describe('CnFooterRowComponent', () => {
  let component: CnFooterRowComponent;
  let fixture: ComponentFixture<CnFooterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnFooterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnFooterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
