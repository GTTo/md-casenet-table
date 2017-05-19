import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdCheckboxModule, MdIconModule, MdSelectModule, MdTooltipModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CnTableComponent } from './cn-table/cn-table.component';
import { CnRowComponent } from './cn-row/cn-row.component';
import { CnCellComponent } from './cn-cell/cn-cell.component';
import { CnHeaderRowComponent } from './cn-header-row/cn-header-row.component';
import { CnFooterRowComponent } from './cn-footer-row/cn-footer-row.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CnCheckboxCellComponent } from './cn-checkbox-cell/cn-checkbox-cell.component';
import { CnCheckboxHeaderComponent } from './cn-checkbox-header/cn-checkbox-header.component';
import {SelectionService} from './services/selection.service';
import {SortService} from './services/sort.service';
import {PaginationService} from './services/pagination.service';
import { CnTablePaginationComponent } from './cn-table-pagination/cn-table-pagination.component';

@NgModule({
  declarations: [
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
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCheckboxModule,
    MdIconModule,
    MdSelectModule,
    MdTooltipModule,
    NoopAnimationsModule
  ],
  providers: [
    SelectionService,
    SortService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
