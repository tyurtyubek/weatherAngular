import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastService } from "./services/weather-forecast.service";
import { ConfigureCityService } from "./services/configure-city.service";
import { FavotiteCitiesComponent } from './favotite-cities/favotite-cities.component';
import { CityLogComponent } from './city-log/city-log.component';
import { SearchHistoryService } from "./services/search-history.service";


@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    FavotiteCitiesComponent,
    CityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [WeatherForecastService, ConfigureCityService,SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
