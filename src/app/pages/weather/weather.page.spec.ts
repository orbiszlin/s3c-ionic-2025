import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage } from './weather.page';

describe('Tab1Page', () => {
  let component: WeatherPage;
  let fixture: ComponentFixture<WeatherPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(WeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
