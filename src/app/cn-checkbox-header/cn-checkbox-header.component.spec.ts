import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnCheckboxHeaderComponent } from './cn-checkbox-header.component';

describe('CnCheckboxHeaderComponent', () => {
  let component: CnCheckboxHeaderComponent;
  let fixture: ComponentFixture<CnCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnCheckboxHeaderComponent ]
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
