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
      {id: 1, name: 'Spain', capital: 'Madrid', language: 'Spanish', domain: 'es' , population: 46423064},
      {id: 2, name: 'Czech Republic', capital: 'Prague', language: 'Czech', domain: 'cz', population: 10553948 },
      {id: 3, name: 'France', capital: 'Paris', language: 'French', domain: 'fr', population: 67000000 },
      {id: 4, name: 'USA', capital: 'Washington D. C.', language: 'English', domain: 'us', population: 324992000 },
      {id: 5, name: 'Germany', capital: 'Berlin', language: 'German', domain: 'de', population: 82175700 },
      {id: 6, name: 'Portugal', capital: 'Lisbon', language: 'Portuguese', domain: 'pt', population: 10341330 },
      {id: 7, name: 'Italy', capital: 'Rome', language: 'Italian', domain: 'it', population: 60674003 },
      {id: 8, name: 'Ukraine', capital: 'Kiev', language: 'Ukrainian', domain: 'ua', population: 42541633 },
      {id: 9, name: 'United Kingdom', capital: 'London', language: 'English', domain: 'uk', population: 65110000 },
    ];

    const columnID: ICnTableColumn = {
      name: 'id', title: 'Id', tooltip: 'Unique identification', orderDir: CnOrderDirectionEnum.NONE
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
