import {Component, inject, ViewChild} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonBadge,
  IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonModal,
  IonButtons, IonInput, IonIcon, IonSelect, IonSelectOption
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../../explore-container/explore-container.component';
import {WeatherService} from "../../utils/services/weather/weather.service";
import {Location} from "../../models/location.model";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {addIcons} from "ionicons";
import {ellipsisHorizontal, ellipsisVertical} from "ionicons/icons";

@Component({
  selector: 'app-tab1',
  templateUrl: 'weather.page.html',
  styleUrls: ['weather.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonBadge, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonModal, IonButtons, IonInput, FormsModule, IonIcon, IonSelect, IonSelectOption, ReactiveFormsModule],
})
export class WeatherPage {

  private weatherService = inject(WeatherService)

  public locations: Location[] = [];

  form = new FormGroup({
    units: new FormControl('metric', [Validators.required]),
  })

  constructor() {
    addIcons({
      ellipsisVertical,
      ellipsisHorizontal
    })

    this.weatherService.getWeather$(40.7128, -74.0060)
      .subscribe(data => {
        this.locations.push(data);
        // console.log(data);
      });
  }

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<any>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }
}
