import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather_syndney$: Observable<number>;
  weather_syndney: number;

  weather_melbourne$: Observable<number>;


  weather_lithgow$: Observable<number>;
  weather_lithgow: number;


  constructor() {
    this.weather_syndney$ = this.getWeatherSydney();
    this.weather_melbourne$ = this.getMelbourne();
    this.weather_lithgow$ = this.getLithgow();

  }

  ngOnInit() {

    this.weather_syndney$.subscribe(item => {
      this.weather_syndney = item;

    });


    //Va seguir escuchando
    this.weather_lithgow$.subscribe(item => {
      this.weather_lithgow = item;

    })
  }


  getWeatherSydney(): Observable<number> {
    let weather = this.getRandom();

    return new Observable(observer => {
      observer.next(weather);
      observer.complete();
    })

  }


  getMelbourne(): Observable<number> {
    let weather = this.getRandom();

    return new Observable(observer => {
      observer.next(weather);
      observer.complete();
    })

  }

  getLithgow(): Observable<number> {

    return new Observable(observer => {

      observer.next(this.getRandom());

      setTimeout(()=> {
        observer.next(this.getRandom());

      }, 4000);


      setTimeout(()=> {
        observer.next(this.getRandom());

      }, 8000);


      setTimeout(()=> {
        observer.complete();

      }, 12000);

    })

  }

  getRandom(): number {
    return Math.floor(Math.random() * (40 - 5 + 1) + 5);
  }

}
