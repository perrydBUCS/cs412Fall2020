import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {wxConfig} from '../config/wxConfig';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(wxConfig.baseURL + wxConfig.apiKey,
      {observe: 'body', responseType: 'json'});
  }
}
