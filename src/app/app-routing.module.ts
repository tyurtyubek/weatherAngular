import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastComponent} from './weather-forecast/weather-forecast.component'
import { FavotiteCitiesComponent } from "./favotite-cities/favotite-cities.component";
import{CityLogComponent} from "./city-log/city-log.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/weatherforecast'
  },
  {
    path: 'weatherforecast',
    component: WeatherForecastComponent
  },
  {
    path: 'favoritecities',
    component: FavotiteCitiesComponent
  },
  {
    path:'searchhistory',
    component: CityLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
