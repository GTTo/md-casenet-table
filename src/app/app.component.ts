import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material design  - Casenet table';
  data: any[];
  columns: String[];

  constructor() {
    this.data = [
      {name: 'Spain', capital: 'Madrid', language: 'Spanish', domain: 'es' },
      {name: 'Czech Republic', capital: 'Prague', language: 'Czech', domain: 'cz' },
      {name: 'France', capital: 'Paris', language: 'French', domain: 'fr' }
    ];

    this.columns = ['Name', 'Capital city', 'Language', 'Internet domain'];
  }
}
