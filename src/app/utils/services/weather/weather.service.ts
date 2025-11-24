import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);

  getWeather(lat: number, lon: number) {
    return this.http.get(environment.baseUrl + `/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}`);
  }
}
