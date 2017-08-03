import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {WeatherObject} from '../models/weatherForecast/weatherJson';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherForecastService {
  private weatherUrl : string = 'http://localhost:45829/api/weather';  // URL to web api
  constructor(private http: Http) { 
  }
  public getWeather(cityName: string, days: string):Promise<WeatherObject> {
    return this.http
          .get(`${this.weatherUrl}/${cityName}/${days}`)
          .toPromise()
          .then(response => response.json() as WeatherObject);
  }
  
}