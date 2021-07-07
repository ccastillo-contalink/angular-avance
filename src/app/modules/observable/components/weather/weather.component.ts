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

  constructor() { 
    this.weather_syndney$ = this.getWeatherSydney();
  }

  ngOnInit() {

    this.weather_syndney$.subscribe(item=> {
      this.weather_syndney= item;

    })
  }


  getWeatherSydney(): Observable<number>{
    let weather = this.getRandom();

    return new Observable(observer=> {
      observer.next(weather);
      observer.complete();
    })

  }



  getRandom(): number{
    return  Math.floor(Math.random() * (40 - 5 + 1) + 5);
  }

}
