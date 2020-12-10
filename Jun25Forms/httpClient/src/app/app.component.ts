import { Component } from '@angular/core';
import { WxServiceService as WxService} from './wx-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClient';
  currentWeather = {
    temperature: 0,
    pressure: 0,
    humidity: 0
  };

  city: string;
  units: string;
//Moved these into the FormGroup for Way 3
  cityControl2: FormControl = new FormControl('boston', Validators.required);
  unitsControl2: FormControl = new FormControl();


//   weatherFormGroup :FormGroup = new FormGroup({
//     cityControl: new FormControl('boston', Validators.required),
//     unitsControl:  new FormControl()
// });

  //Use FormBuilder service as a quick way to set up a form group
  //needs FormBuilder service injected
weatherFormGroup = this.form.group({
  cityControl: ['boston', Validators.required],
  unitsControl: [''],
  subform: this.form.group({
    detail: ['']
  })
})

  constructor(private wxService: WxService, private form: FormBuilder) {}

  getWeather() {
    this.wxService.getWeather().subscribe(
      response => {
        this.currentWeather = response['current']['temp']; // similar to current.temp
      }
    );
  }
  getWeatherByCity() {
    this.wxService.getWeatherByCity(this.city, this.units).subscribe(
      response => {
        this.currentWeather = response['main'];// similar to current.temp
        this.currentWeather = {
          temperature: response['main']['temp'],
          pressure: response['main']['pressure'],
          humidity: response['main']['humidity'],
        }
        console.log(`main looks like this: ${response['main']}`)
      }
    );
  }
  getWeatherByCityWay2() {
    this.wxService.getWeatherByCity(this.cityControl2.value, this.unitsControl2.value).subscribe(
      response => {
        this.currentWeather = response['main'];// similar to current.temp
        this.currentWeather = {
          temperature: response['main']['temp'],
          pressure: response['main']['pressure'],
          humidity: response['main']['humidity'],
        }
        console.log(`main looks like this: ${response['main']}`)
      }
    );
  }
  getWeatherByCityWay3() {
    this.wxService.getWeatherByFormGroup(this.weatherFormGroup).subscribe(
      response => {
        this.currentWeather = response['main'];// similar to current.temp
        this.currentWeather = {
          temperature: response['main']['temp'],
          pressure: response['main']['pressure'],
          humidity: response['main']['humidity'],
        }
        console.log(`main looks like this: ${response['main']}`)
      }
    );
  }

}
