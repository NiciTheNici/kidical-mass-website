import { Injectable } from '@angular/core';
import { Entry } from '../entry/entry';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public entries: Entry[] = [];

  constructor() {
    this.entries.push(
      {
        title: "Zurich",
        description: "The kicical mass in zurich",
        location: {
          lat: 47.3672808,
          lng: 8.5408271,
        }
      });

  }
}
