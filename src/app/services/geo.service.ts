import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { geoData } from '../models/geo.model';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  query$ = new Subject<string>();
  constructor(
    private http:HttpClient,
  ) { }

  getGeoByQuery(query:string){
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=db58ff7bdfbb4bc7ba6181733230209&q=${query}&lang=ru`)
  }
}
