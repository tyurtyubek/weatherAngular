import { Injectable } from '@angular/core';
import {HistoryUserRequest} from '../models/historyUserRequest';
import { Http, Headers}       from '@angular/http';


@Injectable()
export class SearchHistoryService {

  private headers: Headers = new Headers();
  private readonly Url = 'http://localhost:45829/api/history';
  
  constructor(private http: Http) {}


  getAllHistory(): Promise<HistoryUserRequest[]> {
    return this.http
      .get(`${this.Url}`)
      .toPromise()
      .then(response => response.json() as HistoryUserRequest[]);
  }

  deleteAllHistory(): Promise<void> {
    return this.http
      .delete(`${this.Url}`, {headers: this.headers})
      .toPromise()
      .then(() => null);}
}
