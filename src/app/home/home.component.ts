import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData: any; // zmienna na dane
  errorData: any;

  show: boolean = false;
  showBar: boolean = false;

  ngOnInit(): void {}

  onSubmit(city: string) {
    this.show = false; // resetuje te zmienne aby uniknąć błędów
    this.showBar = true;
    this.errorData = null;
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        //dane przypisujemy do naszej zmiennej, nasłuchuje zmianny zmiennej
        this.weatherData = data;
        this.show = true;
        this.showBar = false;
      },
      (err) => {
        //dane odnośnie errorów przypisuje do zmiennej
        this.errorData = err;
        this.show = true;
        this.showBar = false;
      }
    );
  }
}
