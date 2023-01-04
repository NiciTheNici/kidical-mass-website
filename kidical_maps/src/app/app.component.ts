import { Component, OnInit } from '@angular/core';
import { Entry } from './entry/entry';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  public numbers: number[] = Array.from(Array(10).keys(), n => n + 1);;
  title = 'kidical_maps';

  ngOnInit(): void {
    console.log(this.numbers);
  }

  constructor(public service: AppService) {

  }

  clickCard(entry: Entry): void {
    this.service.map.flyTo(entry.location, 18)
  }
}
