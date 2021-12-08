import {Component} from '@angular/core';
import {DOCUMENTS} from "./documents-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pacific Ocean Portal';

  docs = DOCUMENTS;

}
