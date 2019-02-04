import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {Aircraft} from '../aircraft.model';
import {AircraftService} from '../aircraft.service';
import {ILink} from '../../models/link.model';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
  providers: [LoggingService]
})
export class AircraftListComponent implements OnInit {

  aircrafts: Aircraft[] = [];
  link: ILink = null;

  constructor(private loggingService: LoggingService, private aircraftService: AircraftService) {}

  ngOnInit() {
    this.loggingService.logStatusChange('Calling Aircraft Service...');
    this.aircraftService.getAllAircrafts().subscribe(x => {
      this.aircrafts = x.body['value'];
      this.link = x.body['links'];
    }
    );
  }

  onRefreshList() {
    this.ngOnInit();
    for (let x of this.aircrafts) {
      console.log('ID: ' + x.id)
      for (let y of x.links) {
        console.log(y.method + ': ' + y.href);
      }
    }
  }

  onDeleteAircraft(id: string) {
    this.aircraftService.deleteAircraftById(id);
    this.ngOnInit();
  }

}
