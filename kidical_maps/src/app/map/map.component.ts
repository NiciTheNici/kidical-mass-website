import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  private markers: L.Marker[] = [];
  private icon: L.Icon = L.icon({
    iconUrl: 'https://whatemoji.org/wp-content/uploads/2020/07/Party-Popper-Emoji.png',
    iconSize: [50, 50],
  });

  private initMap(): void {
    this.map = L.map('map', {
      center: [47.3727, 8.5419],
      zoom: 13
    });

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '© OpenStreetMap contributors' }
    ).addTo(this.map);

    this.markers.push(
      L.marker(
        [47.3672808, 8.5408271],
        {
          icon: this.icon,
        }
      ));

    this.markers.map(marker => marker.addTo(this.map));
  }

  ngOnInit(): void {
    this.initMap();
  }
}

