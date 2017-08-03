import { Component, OnInit } from '@angular/core';

import {WeatherObject} from '../models/weatherForecast/weatherJson';
import {WeatherForecastService} from '../services/weather-forecast.service';
import { ConfigureCityService } from "../services/configure-city.service";
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { SavedCity } from "../models/savedCity";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  
  weatherResponse : WeatherObject;
  cityOwn : string;
  daysNumber: string;
  savedCities: SavedCity[];
  constructor(private weatherService : WeatherForecastService, private  citiesService : ConfigureCityService ) {
  }

  ngOnInit() {
    this.getAllSavedCities();
    }

    getAllSavedCities():void{
    this.citiesService.getAllCities()
      .then(city => this.savedCities = city);
  }

  public getWeather(){
   this.weatherService.getWeather(this.cityOwn, this.daysNumber)
                      .then(weather => this.weatherResponse = weather);                                     
  }

public choose(city : string){
this.cityOwn = city;
}

  

}
