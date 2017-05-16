import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material design  - Casenet table';
  rows: any[];
  columns: String[];

  constructor() {
    this.rows = [
      {id: 1, name: 'Spain', capital: 'Madrid', language: 'Spanish', domain: 'es' },
      {id: 2, name: 'Czech Republic', capital: 'Prague', language: 'Czech', domain: 'cz' },
      {id: 3, name: 'France', capital: 'Paris', language: 'French', domain: 'fr' }
    ];

    this.columns = ['Id', 'Name', 'Capital city', 'Language', 'Internet domain'];
  }
}
