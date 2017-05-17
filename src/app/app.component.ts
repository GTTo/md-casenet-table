import { Component } from '@angular/core';

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

    const columnID = {name: 'id', title: 'Id', tooltip: 'Unique identificatior'};
    const columnName = {name: 'name', title: 'Name', tooltip: 'Name of the country'};
    const columnCapital = {name: 'capital', title: 'Capital city', tooltip: 'Main capital city of the country'};
    const columnLanguage = {name: 'language', title: 'Language', tooltip: 'Default language spoken in country'};
    const columnDomain = {name: 'domain', title: 'Internet domain', tooltip: 'The ICAAN domain for the country'};
    const columnPopulation = {name: 'population', title: 'Population', tooltip: 'Population this year'};

    this.columnsList = [columnName, columnCapital, columnLanguage, columnDomain];
    // TODO: define a detailed view
    this.columnsDetail = [columnID, columnName, columnCapital, columnLanguage, columnDomain, columnPopulation];
  }
}
