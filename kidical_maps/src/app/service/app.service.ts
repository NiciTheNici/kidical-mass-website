import { Injectable } from '@angular/core';
import { Entry } from '../entry/entry';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public entries: Entry[] = [
    {
      title: "Zurich",
      description: "The kicical mass in zurich",
      location: {
        lat: 47.3672808,
        lng: 8.5408271,
      }
    }, {
      title: "St.Gallen",
      description: "The kicical mass in St.Gallen",
      location: {
        lat: 47.42259,
        lng: 9.37600,
      }
    }, {
      title: "Baden",
      description: "The kicical mass in Baden",
      location: {
        lat: 47.47105,
        lng: 8.30761,
      }
    }, {
      title: "Basel",
      description: "The kicical mass in Basel",
      location: {
        lat: 46.19803,
        lng: 6.14065,
      }
    },
  ];

  constructor() {

  }
}
