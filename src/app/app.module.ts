import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CnTableComponent } from './cn-table/cn-table.component';
import { CnRowComponent } from './cn-row/cn-row.component';
import { CnCellComponent } from './cn-cell/cn-cell.component';
import { CnHeaderRowComponent } from './cn-header-row/cn-header-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CnTableComponent,
    CnRowComponent,
    CnCellComponent,
    CnHeaderRowComponent
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
