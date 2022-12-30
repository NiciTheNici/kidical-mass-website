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

  private markers: L.Marker[] = [];
  private icon: L.Icon;

  private initMap(): void {
    this.service.map = L.map('map', {
      center: this.service.entries[0].location,
      zoom: 13,
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

    this.markers.map(marker => marker.addTo(this.service.map));
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
    this.markers.push(
      L.marker(
        [entry.location.lat, entry.location.lng],
        {
          icon: this.icon,
        }
      )
    )
  }
}

