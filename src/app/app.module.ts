import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatPaginatorModule, MatProgressBarModule, MatSelectModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { WeatherServices } from './core/weather.services';
import { WeatherDataService } from './services/weather-data.service';
import { WeatherAlertDataService } from './services/weather-alert-data.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],
  providers: [
    WeatherServices,
    WeatherDataService,
    WeatherAlertDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
