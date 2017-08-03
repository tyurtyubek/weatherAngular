import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {SavedCity} from '../models/savedCity';

import 'rxjs/add/operator/toPromise';
import { City } from "../models/weatherForecast/City";


@Injectable()
export class ConfigureCityService {
  private headers: Headers = new Headers();
  private Url: string = 'http://localhost:45829/api/city'; 
  constructor(private http : Http) { }

  public getAllCities():Promise<SavedCity[]>{
    return this.http.
      get(this.Url)
      .toPromise()
      .then(response => response.json() as SavedCity[]);
  }
    
  public deleteCity(id: number): Promise<void> {
		var uri = `${this.Url}/${id}`;
		return this.http.delete(uri, { headers: this.headers }).toPromise()
			.then(() => null)
			.catch(this.handleError);
  }
  
  public editCity(city: SavedCity): Promise<void> {
    return this.http
      .put(`${this.Url}/${city.Id}`, JSON.stringify(city), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  addCity(city: SavedCity): Promise<void> {
    return this.http
      .post(`${this.Url}`, JSON.stringify(city), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}
