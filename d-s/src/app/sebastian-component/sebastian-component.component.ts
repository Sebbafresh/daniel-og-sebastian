import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInformationService } from './weather-information.service';

@Component({
  selector: 'app-sebastian-component',
  templateUrl: './sebastian-component.component.html',
  styleUrls: ['./sebastian-component.component.css']
})
export class SebastianComponentComponent implements OnInit {

    public time$: Observable<string> = this.weatherInformationService.time$;
    public temp$: Observable<number> = this.weatherInformationService.temp$;

  constructor(public weatherInformationService: WeatherInformationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.weatherInformationService.getWeather();
  }

}
