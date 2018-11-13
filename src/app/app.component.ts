import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoya <3 <3';
  private x: any;
  constructor(private http: HttpClient) {
    this.x = this.http.get('http://lightspeedairlines20181016064658.azurewebsites.net/api/aircraft');
  }

  getAircraft2() {

      this.x.subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
