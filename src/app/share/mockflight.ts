import { Flight } from "../flighto/flighto";
export class Mockflight {
  public static mfData:Flight[] = [
    {
      fullName:'Ekkarath Nott',
      from: "Thailand",
      to: "New York",
      type: 'One way',
      departure: new Date('10-03-2022'),
      arrival: new Date('12-03-2022'),
      adults: 1,
      children: 0,
      infants: 1,
    },
  ];
}
