import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CnTableComponent } from './cn-table/cn-table.component';
import { CnTableRowComponent } from './cn-table-row/cn-table-row.component';
import { CnTableCellComponent } from './cn-table-cell/cn-table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CnTableComponent,
    CnTableRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
