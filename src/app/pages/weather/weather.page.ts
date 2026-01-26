import {Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonBadge,
  IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonModal,
  IonButtons, IonInput, IonIcon, IonSelect, IonSelectOption, IonSpinner, IonListHeader
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../../explore-container/explore-container.component';
import {WeatherService} from "../../utils/services/weather/weather.service";
import {Location} from "../../models/location.model";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {addIcons} from "ionicons";
import {ellipsisHorizontal, ellipsisVertical} from "ionicons/icons";
import {StorageService} from "../../utils/services/storage/storage.service";
import {Geolocation} from "../../models/geolocation.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'weather.page.html',
  styleUrls: ['weather.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonBadge, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonModal, IonButtons, IonInput, FormsModule, IonIcon, IonSelect, IonSelectOption, ReactiveFormsModule, IonSpinner, IonListHeader],
})
export class WeatherPage implements OnInit {

  private weatherService = inject(WeatherService)
  private storageService = inject(StorageService)

  // TODO: nahradit signálem
  public locations: Location[] = [];

  public locationsSignal = signal<Geolocation[]>([]);

  form = new FormGroup({
    units: new FormControl('metric', [Validators.required]),
  })

  locationAddForm = new FormGroup({
    latitude: new FormControl(null, [
      Validators.required,
      Validators.min(-90),
      Validators.max(90)
    ]),
    longitude: new FormControl(null, [
      Validators.required,
      Validators.min(-180),
      Validators.max(180)
    ]),
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

  async ngOnInit(): Promise<void> {
    const locations = await this.storageService.get<Geolocation[] | null>('locations');
    this.locationsSignal.set(locations ?? []);
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

  async saveLocation() {
    if (this.locationAddForm.invalid) {
      // TODO: předělat do toastu
      alert('Invalid form');
      return;
    }

    const places = this.locationsSignal();
    places.push(this.locationAddForm.value as any as Geolocation);
    this.locationsSignal.set(places);

    await this.storageService.save('locations', places);

    this.locationAddForm.reset();
  }

  protected async removeLocation(index: number) {
    const places = this.locationsSignal();
    places.splice(index, 1);
    this.locationsSignal.set(places);

    await this.storageService.save('locations', places);
  }
}
