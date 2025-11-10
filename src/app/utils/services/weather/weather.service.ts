import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);

  /*
  // Alternativní způsob, dnes již zastaralý - používat inject() funkci!
  constructor(
    private http: HttpClient,
  ) {
  }
  */

  getWeather(lat: number, lon: number) {
    return this.http.get('https://example.com');
  }
}
