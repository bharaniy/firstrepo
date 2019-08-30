import { Injectable } from '@angular/core';
import {CurrentWeather} from './current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // tslint:disable-next-line:max-line-length

  current: CurrentWeather = new CurrentWeather('Kansas city', '80', 'rainy', '60', '80',
    'https://www.iconfinder.com/icons/3840014/cloud_color_icons_snow_sun_weather_icon', );
  constructor() { }
  weatherNow() {
    return this.current;
  }
}
