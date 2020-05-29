import { Injectable } from '@angular/core';
import { key } from './key';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly URL_API: string = "http://api.openweathermap.org/data/2.5/weather?q="; //pierwsza czesc adresu
  private readonly URL_API2: string = "&appid=" + key; // druga czesc adresu

  constructor(private http: HttpClient) { }


  getWeather(currentCity: string) {
    return this.http.get(this.URL_API + currentCity + this.URL_API2)
  }

  

}
