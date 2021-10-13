import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDataComponent } from './weather-data.component';
import { WeatherDetailsComponent } from './weather-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'WeatherData', pathMatch: 'full' },
  { path: 'WeatherData', component: WeatherDataComponent },
  { path: 'WeatherDetails/:data', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WeatherDataComponent, WeatherDetailsComponent,]