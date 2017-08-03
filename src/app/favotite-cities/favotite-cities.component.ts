import { Component, OnInit } from '@angular/core';
import { SavedCity } from "../models/savedCity";
import { ConfigureCityService } from "../services/configure-city.service";

@Component({
  selector: 'app-favotite-cities',
  templateUrl: './favotite-cities.component.html',
  styleUrls: ['./favotite-cities.component.scss']
})
export class FavotiteCitiesComponent implements OnInit {
  savedCities: SavedCity[];
  cityString : string;
  constructor(private  citiesService : ConfigureCityService) { }

  ngOnInit() {
    this.getAllSavedCities();
  }

  getAllSavedCities():void{
    this.citiesService.getAllCities()
      .then(city => this.savedCities = city);
  }

  public deleteCity(id: number):void{
    this.citiesService.deleteCity(id)
      .then(() => this.savedCities = this.savedCities.filter(city => city.Id !== id));
  }

  editCity(city : SavedCity, cityNameNew: string){
    city.CityName = cityNameNew;
    this.citiesService.editCity(city).then(()=> this.getAllSavedCities());
  }

  addCity(){
    const city = new SavedCity();
    city.CityName = this.cityString;
    this.citiesService.addCity(city)
      .then(() => this.getAllSavedCities());

  }
}
