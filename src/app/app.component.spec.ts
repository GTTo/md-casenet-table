import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {CnTableComponent} from './cn-table/cn-table.component';
import {CnHeaderRowComponent} from './cn-header-row/cn-header-row.component';
import {CnRowComponent} from './cn-row/cn-row.component';
import {CnFooterRowComponent} from './cn-footer-row/cn-footer-row.component';
import {CnCheckboxHeaderComponent} from './cn-checkbox-header/cn-checkbox-header.component';
import {CnCellComponent} from './cn-cell/cn-cell.component';
import {MdCheckboxModule, MdSelectModule, MdTooltip, MdTooltipModule} from '@angular/material';
import {CnTablePaginationComponent} from './cn-table-pagination/cn-table-pagination.component';
import {CnCheckboxCellComponent} from './cn-checkbox-cell/cn-checkbox-cell.component';
import {NgModel} from '@angular/forms';
import {SortService} from './services/sort.service';
import {PaginationService} from './services/pagination.service';
import {SelectionService} from './services/selection.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModel,
        AppComponent,
        CnTableComponent,
        CnRowComponent,
        CnCellComponent,
        CnHeaderRowComponent,
        CnFooterRowComponent,
        CnCheckboxCellComponent,
        CnCheckboxHeaderComponent,
        CnTablePaginationComponent
      ],
      imports: [
        MdTooltipModule,
        MdCheckboxModule,
        MdSelectModule,
        NoopAnimationsModule
      ],
      providers: [
        SelectionService,
        SortService,
        PaginationService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Material design  - Casenet table'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Material design  - Casenet table');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Material design  - Casenet table');
  }));
});
