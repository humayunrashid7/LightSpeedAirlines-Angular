export class Aircraft {

  public id: number;
  public manufacturer: string;
  public model: string;
  public registration: string;
  public fin: string;
  public manufactureDate: string;
  public aircraftIATACode: string;
  public aircraftICAOCode: string;


  constructor(id: number, manufacturer: string, model: string, registration: string, fin: string,
              manufactureDate: string, aircraftIATACode: string, aircraftICAOCode: string) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.registration = registration;
    this.fin = fin;
    this.manufactureDate = manufactureDate;
    this.aircraftIATACode = aircraftIATACode;
    this.aircraftICAOCode = aircraftICAOCode;
  }
}
