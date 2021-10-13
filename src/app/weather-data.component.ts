import { Component, OnInit } from '@angular/core';
import { AlertType } from './core/models/alert-type.model';
import { WeatherServices } from './core/weather.services';
import { WeatherDataService } from './services/weather-data.service';
import { WeatherAlertDataService } from './services/weather-alert-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  alertTypes: AlertType[];

  selectedalert: string;

  area2:string;

  data:string;

  area:Array <string>=new Array()

  constructor(private weatherServices: WeatherServices, private weather: WeatherDataService, private weatherData: WeatherAlertDataService, private route:Router) { }

  public ngOnInit() {
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });

    this.weather.getWeatherData().subscribe(res =>{
        console.log(res);
        this.area=Object.keys(res["areas"])
        console.log("Areas:",this.area);
    })

  }

  dropdownValue(dropdown) {
    this.selectedalert=dropdown.value
  }

  clickHandler(area1:string) {
    this.area2=area1;
    this.data=this.selectedalert+"-"+this.area2
    if(this.selectedalert===undefined){
      alert("Please select alert type!!!")
    }
    else if(this.area2===undefined){
      alert("Please select area!!!")
    }else{
      this.route.navigate(['WeatherDetails',this.data])
    }
    
  } 
}
