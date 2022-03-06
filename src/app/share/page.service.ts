import { Injectable } from '@angular/core';
import { Flight } from '../flighto/flighto';
import { Mockflight } from '../share/mockflight';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  flights: Flight[] = []
  constructor() {
    this.flights = Mockflight.mfData
  }

  getPages(){
    return this.flights
  }

  addFlight(flights:Flight){
    this.flights.push(flights)
  }

}


