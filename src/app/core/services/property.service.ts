import { Injectable } from '@angular/core';
import { PropertiesResponce, Property } from 'Core/models';
import { delay, map, of } from 'rxjs';

declare var require: any;
let properties: PropertiesResponce = require('../constants/properties.json');

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  getProperties() {
    return of(properties).pipe(
      delay(1000),
      map((res) => res.properties.map((property) => new Property(property)))
    );
  }
}
