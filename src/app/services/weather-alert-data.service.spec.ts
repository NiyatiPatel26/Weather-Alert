import { TestBed } from '@angular/core/testing';

import { WeatherAlertDataService } from './weather-alert-data.service';

describe('WeatherAlertDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherAlertDataService = TestBed.get(WeatherAlertDataService);
    expect(service).toBeTruthy();
  });
});
