import {Component} from '@angular/core';
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
import {ExploreContainerComponent} from '../explore-container/explore-container.component';

export interface Location {
  place: string;
  weather: string;
  temperature: number;
  units: 'celsius' | 'fahrenheit';
  icon: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonBadge, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol],
})
export class Tab1Page {

  public locations: Location[] = [
    {
      place: 'New York',
      weather: 'Cloudy',
      temperature: 25,
      units: 'celsius',
      icon: '10d@4x.png'
    }
  ];

  constructor() {
  }
}
