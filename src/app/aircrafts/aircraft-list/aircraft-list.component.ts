import { Component, OnInit } from '@angular/core';
import {Aircraft} from '../aircraft.model';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  aircrafts: Aircraft[] = [
    new Aircraft(1, 'Boeing', '777-300ER', 'C-FITL', '731', '2007-03-01', '77W', 'B77W'),
    new Aircraft(2, 'Boeing', '777-300ER', 'C-FITU', '732', '2007-04-01', '77W', 'B77W'),
    new Aircraft(3, 'Boeing', '777-300ER', 'C-FITW', '733', '2007-50-01', '77W', 'B77W')
  ];

  constructor() { }

  ngOnInit() {
  }

}
