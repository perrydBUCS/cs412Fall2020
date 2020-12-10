import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.baseURL
  constructor(private http: HttpClient) { }

  getWeather() {
    // returns an observable
<<<<<<< HEAD
    return this.http.get(API.baseURL + '&appid=' + API.apiKey);
=======
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=41.98&lon=71.32&appid=XX');
>>>>>>> 447a780803d9b9c7bcbf0c12679036a0ee077e86

  }
  getWeatherByCity(city: string, units: string = 'imperial') {
    console.log(`in getWeatherByCity `)
<<<<<<< HEAD
    return this.http.get(API.baseURL + city + '&units=' + units + '&appid='+ API.apiKey);
=======
    return this.http.get(this.baseURL + city + '&units=' + units + '&appid=XX');
>>>>>>> 447a780803d9b9c7bcbf0c12679036a0ee077e86

  }
  getWeatherByFormGroup(form: FormGroup) {
    console.log(`in getWeatherByCity `)
    let city = form.value.cityControl;
    let units = form.value.unitsControl;
<<<<<<< HEAD
    return this.http.get(API.baseURL + city + '&units=' + units + '&appid=' + API.apiKey);
=======
    return this.http.get(this.baseURL + city + '&units=' + units + '&appid=XX');
>>>>>>> 447a780803d9b9c7bcbf0c12679036a0ee077e86

  }
}
