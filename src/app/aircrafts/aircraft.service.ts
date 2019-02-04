import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  readonly ROOT_URL = 'https://localhost:44345/api/aircrafts';

  constructor(private http: HttpClient, private aircraftService: AircraftService) {}

  getAllAircrafts() {
    return this.http.get(this.ROOT_URL, {
      observe: 'response',
      responseType: 'json'
    });
    // .pipe(map(response => response.body['value']));
    // .subscribe(result => this.aircraftService.setAircrafts() = result.body['value']);
  }

  deleteAircraftById(id: string) {
    this.http.delete(this.ROOT_URL + '/' + id).subscribe();
}

}
