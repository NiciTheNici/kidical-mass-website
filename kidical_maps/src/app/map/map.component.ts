import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Entry } from '../entry/entry';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private icon: L.Icon;

  private initMap(): void {
    this.service.map = L.map('map', {
      center: [46.886, 8.300],
      zoom: 8,
      attributionControl: true,
    });

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors',
      }
    ).addTo(this.service.map);

    this.service.entries.map(entry => {
      this.createMarker(entry);
    });
    // this.createMarker(46.2058820, 6.1477327);

    this.service.markers.map(marker => marker.addTo(this.service.map));
  }

  ngOnInit(): void {
    this.initMap();
    console.log(this.service);
  }

  constructor(private service: AppService) {
    this.icon = L.icon({
      iconUrl: 'https://whatemoji.org/wp-content/uploads/2020/07/Party-Popper-Emoji.png',
      iconSize: [50, 50],
    });
  }

  createMarker(entry: Entry): void {
    this.service.markers.push(
      L.marker(
        [entry.location.lat, entry.location.lng],
        {
          icon: this.icon,
        }
      ).bindPopup(L.popup(
        {
          content: 'The kidical mass in ' + '<u>' + entry.title + '</u>',
          className: "popup",
          closeButton: false,
        }))
    )
  }
}

