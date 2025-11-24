import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonBadge,
  IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../../explore-container/explore-container.component';
import {WeatherService} from "../../utils/services/weather/weather.service";

export interface Location {
  name: string;
  weather: {
    id: number;
    main: number;
    description: number;
    icon: number;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  },
  clouds: {
    all: number;
  },
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'weather.page.html',
  styleUrls: ['weather.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonBadge, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol],
})
export class WeatherPage {

  private weatherService = inject(WeatherService)

  public locations: Location[] = [];

  constructor() {
    this.weatherService.getWeather(40.7128, -74.0060)
      .subscribe(data => {
        this.locations.push(data as Location);
        // console.log(data);
      });
  }
}
