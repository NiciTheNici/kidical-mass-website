import { Injectable } from '@angular/core';
import { Entry } from '../entry/entry';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public entries: Entry[] = require("../entries.json");
  public map!: L.Map;

  constructor() {
  }
}
