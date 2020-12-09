import { Component, OnInit } from '@angular/core';
import {WxService} from '../services/wx.service';

interface WX {
  current: object;
  daily: object;
}

@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHTTPComponent implements OnInit {
  currentWeather: any;

// inject service into component
  constructor(private wxService: WxService) { }

  ngOnInit(): void {
  }

  // getWeather(): void { // call a service to get the current data
  //   this.wxService.getWeather().subscribe(
  //     response => {
  //       console.log(`Response: ${response}`);
  //       this.currentWeather = response['current'];
  //     }
  //   );
  // }
  getWeather(): void { // call a service to get the current data
    this.wxService.getWeather().subscribe(
      (response: WX) => {
        console.log(`Response: ${response}`);
        this.currentWeather = response.current;
      }
    );
  }
}
