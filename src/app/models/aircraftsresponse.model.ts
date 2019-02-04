import {ILink} from './link.model';
import {Aircraft} from '../aircrafts/aircraft.model';

export class IAircraftsResponse {
  values: Aircraft[];
  links: ILink;

  constructor() {}
}
