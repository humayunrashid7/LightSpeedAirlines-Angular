import {IResource} from '../models/resource.model';
import {ILink} from '../models/link.model';

export class Aircraft implements IResource {

  id: number;
  manufacturer: string;
  model: string;
  registration: string;
  fin: string;
  manufactureDate: string;
  capacity: number;
  links: ILink[];

  constructor(id: number, manufacturer: string, model: string, registration: string, fin: string,
              manufactureDate: string, capacity: number, links: ILink[]) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.registration = registration;
    this.fin = fin;
    this.manufactureDate = manufactureDate;
    this.capacity = capacity;
    this.links = links;
  }

}
