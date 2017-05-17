import { Component } from '@angular/core';
import {CnOrderDirectionEnum, ICnTableColumn} from './cn-table/cn-table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material design  - Casenet table';
  rows: any[];
  columnsList: any[];
  columnsDetail: any[];

  constructor() {
    this.rows = [
      {id: 1, name: 'Spain', capital: 'Madrid', language: 'Spanish', domain: 'es' , population: 42000000},
      {id: 2, name: 'Czech Republic', capital: 'Prague', language: 'Czech', domain: 'cz', population: 35000000 },
      {id: 3, name: 'France', capital: 'Paris', language: 'French', domain: 'fr', population: 56000000 }
    ];

    const columnID: ICnTableColumn = {
      name: 'id', title: 'Id', tooltip: 'Unique identificatior', orderDir: CnOrderDirectionEnum.NONE
    };
    const columnName: ICnTableColumn = {
      name: 'name', title: 'Name', tooltip: 'Name of the country', orderDir: CnOrderDirectionEnum.NONE
    };
    const columnCapital: ICnTableColumn = {
      name: 'capital', title: 'Capital city', tooltip: 'Main capital city of the country', orderDir: CnOrderDirectionEnum.NONE
    };
    const columnLanguage: ICnTableColumn = {
      name: 'language', title: 'Language', tooltip: 'Default language spoken in country', orderDir: CnOrderDirectionEnum.NONE
    };
    const columnDomain: ICnTableColumn = {
      name: 'domain', title: 'Internet domain', tooltip: 'The ICAAN domain for the country', orderDir: CnOrderDirectionEnum.NONE
    };
    const columnPopulation: ICnTableColumn = {
      name: 'population', title: 'Population', tooltip: 'Population this year', orderDir: CnOrderDirectionEnum.NONE
    };

    this.columnsList = [columnName, columnCapital, columnLanguage, columnDomain];
    // TODO: define a detailed view
    this.columnsDetail = [columnID, columnName, columnCapital, columnLanguage, columnDomain, columnPopulation];
  }
}
