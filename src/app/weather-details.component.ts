import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherAlertDataService } from './services/weather-alert-data.service';
export interface properties {
  areaDesc: string;
  affectedZones: string[];
  event: string
}

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  features: Array<string> = new Array()

  properties: Array<string> = new Array()

  arr: Array<string>

  areaCode: string

  alert: string

  i: number

  isCompleted: boolean = true

  displayedColumns: string[] = ['areaDesc', 'affectedZones']

  constructor(private weatherData: WeatherAlertDataService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.areaCode = param.get('data');
      this.arr = this.areaCode.split("-")
    });

    this.weatherData.getAlertData(this.arr[1]).subscribe(data => {

      this.isCompleted = false;

      console.log("Area Details:", data);

      this.features = data["features"]
      console.log("Features:", this.features)

      this.alert = this.arr[0]

      const alertType = this.arr[0]

      this.properties = [];

      for (let i of this.features) {
        console.log(alertType)
        if (i["properties"].event == alertType) {
          this.properties.push(i["properties"])
        }
      }
      if (this.properties.length == 0) {
        alert("Oops!!! \n" + this.alert + " event is not available in " + this.arr[1] + " !!!")
        this.route.navigate(['WeatherData'])
      }
      console.log("Properties:", this.properties)
    },
      error => this.isCompleted = false
    )
  }

}

