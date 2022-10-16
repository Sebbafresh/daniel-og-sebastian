import { Component, OnInit } from '@angular/core';
import { WeatherInformationService } from './weather-information.service';

@Component({
  selector: 'app-sebastian-component',
  templateUrl: './sebastian-component.component.html',
  styleUrls: ['./sebastian-component.component.css']
})
export class SebastianComponentComponent implements OnInit {

  constructor(public weatherInformationService: WeatherInformationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.weatherInformationService.getWeather();
  }

}
