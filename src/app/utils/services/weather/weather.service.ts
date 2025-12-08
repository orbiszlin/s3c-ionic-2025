import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Location} from "../../../models/location.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);

  public units: 'metric' | 'imperial' = 'metric';

  getWeather$(lat: number, lon: number) {
    return this.http.get<Location>(environment.baseUrl + `/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}&units=${this.units}`);
  }
}
