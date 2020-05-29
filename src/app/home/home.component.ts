import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData: any; // zmienna na dane

  show:boolean = false;

  ngOnInit(): void {

  }

  onSubmit(city: string) {
    this.weatherService.getWeather(city).subscribe(data => { //dane przypisujemy do naszej zmiennej, nasłuchuje zmianny zmiennej
      this.weatherData = data;
      console.log(this.weatherData); //loguje do konsoli sprawdzając czy nazse dane się pojawiają
    });
    setTimeout(()=>[
      this.show=true
    ],500)
  }
}
