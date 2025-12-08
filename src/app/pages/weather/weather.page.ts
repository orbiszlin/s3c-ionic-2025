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
  IonButtons, IonInput, IonIcon, IonSelect, IonSelectOption, IonSpinner
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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonBadge, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonModal, IonButtons, IonInput, FormsModule, IonIcon, IonSelect, IonSelectOption, ReactiveFormsModule, IonSpinner],
})
export class WeatherPage {

  private weatherService = inject(WeatherService)

  public locations: Location[] = [];

  form = new FormGroup({
    units: new FormControl('metric', [Validators.required]),
  })

  protected units: string = 'metric';
  protected loading: boolean = false;

  constructor() {
    addIcons({
      ellipsisVertical,
      ellipsisHorizontal
    })

    this.loading = true;
    this.weatherService.getWeather$(40.7128, -74.0060)
      .subscribe(data => {
        this.locations.push(data);
        this.loading = false;
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

    // this.units = this.form.get('units')!.value;
    this.units = this.form.value.units!;

    // reset places
    this.locations = [];
    this.weatherService.units = this.units as any;

    // get new places
    this.loading = true;
    this.weatherService.getWeather$(40.7128, -74.0060)
      .subscribe(data => {
        this.locations.push(data);
        this.loading = false;
      });
  }

  onWillDismiss(event: CustomEvent<any>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }
}
