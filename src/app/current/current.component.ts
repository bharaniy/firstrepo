import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {CurrentWeather} from '../current-weather';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
 myWeather: CurrentWeather;
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
  }

}
