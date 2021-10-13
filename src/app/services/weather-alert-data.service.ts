import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherAlertDataService {


  url ='https://api.weather.gov/alerts/active/area/';


  
  constructor(private http:HttpClient) { }

  getAlertData(pass:string){
     return this.http.get(this.url+pass);
  }

}