import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material design  - Casenet table';
  rows: any[];
  columns: any[];

  constructor() {
    this.rows = [
      {id: 1, name: 'Spain', capital: 'Madrid', language: 'Spanish', domain: 'es' , population: 42000000},
      {id: 2, name: 'Czech Republic', capital: 'Prague', language: 'Czech', domain: 'cz', population: 35000000 },
      {id: 3, name: 'France', capital: 'Paris', language: 'French', domain: 'fr', population: 56000000 }
    ];

    this.columns = [
      {name: 'id', title: 'Id', tooltip: 'Unique identificatior'},
      {name: 'name', title: 'Name', tooltip: 'Name of the country'},
      {name: 'capital', title: 'Capital city', tooltip: 'Main capital city of the country'},
      {name: 'language', title: 'Language', tooltip: 'Default language spoken in country'},
      {name: 'domain', title: 'Internet domain', tooltip: 'The ICAAN domain for the country'}
    ];
  }
}
