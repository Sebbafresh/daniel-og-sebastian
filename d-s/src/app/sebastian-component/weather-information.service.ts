import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherInformationService {

    private _weatherSubject: Subject<any> = new Subject();
    public weatherObservable$: Observable<any> = this._weatherSubject.asObservable();

    private _timeSubject: Subject<any> = new Subject();
    public time$: Observable<string> = this._timeSubject.asObservable();

    private _tempSubject: Subject<any> = new Subject();
    public temp$: Observable<any> = this._tempSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getWeather(){
    this.http.get<any>("https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m").subscribe((weather) => {
        console.log("weather: ", weather);
        
        this._weatherSubject.next(weather);
        this._tempSubject.next(weather?.hourly?.temperature_2m[0])
        this._timeSubject.next(weather?.hourly?.time[0])
    });
  }
}
