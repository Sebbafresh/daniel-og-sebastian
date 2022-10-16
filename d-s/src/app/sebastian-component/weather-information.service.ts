import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherInformationService {

  constructor(private http: HttpClient) { }

  public getWeather(){
    this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").subscribe((pokemon) => {
        console.log("pokemon: ", pokemon);
    });
  }
}
