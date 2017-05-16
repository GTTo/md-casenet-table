import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdCheckboxModule, MdIconModule} from '@angular/material';

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

@NgModule({
  declarations: [
    AppComponent,
    CnTableComponent,
    CnRowComponent,
    CnCellComponent,
    CnHeaderRowComponent,
    CnFooterRowComponent,
    CnCheckboxCellComponent,
    CnCheckboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCheckboxModule,
    MdIconModule,
    NoopAnimationsModule
  ],
  providers: [
    SelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
