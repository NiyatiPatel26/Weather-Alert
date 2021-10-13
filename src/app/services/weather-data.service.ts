import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  url = "https://api.weather.gov/alerts/active/count";
  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get(this.url)
  }
}
