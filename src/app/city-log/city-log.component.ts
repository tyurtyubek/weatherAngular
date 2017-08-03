import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { SearchHistoryService } from '../services/search-history.service';
import {HistoryUserRequest} from '../models/historyUserRequest';

@Component({
  selector: 'app-city-log',
  templateUrl: './city-log.component.html',
  styleUrls: ['./city-log.component.scss']
})
export class CityLogComponent implements OnInit {
  private historySearch : HistoryUserRequest[];
  constructor(private searchHisService: SearchHistoryService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(){
    this.searchHisService.getAllHistory()
    .then(history => this.historySearch = history);
  }
  deleteAllHistory(){
    this.searchHisService.deleteAllHistory().then(() =>  this.getHistory());
  }
}
