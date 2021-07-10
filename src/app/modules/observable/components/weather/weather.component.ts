import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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


  weather_darvin$: Observable<number>;

  weather_mexico_city$: Observable<number>;
  weather_mexico_city: number;

  subscription_mexico_city: Subscription;

  weather_monterrey$: Observable<number>;
  weather_monterrey: number;



  constructor() {
    this.weather_syndney$ = this.getCompletedObservable();
    this.weather_melbourne$ = this.getCompletedObservable();

    this.weather_lithgow$ = this.getTimerObservable();
    this.weather_darvin$ = this.getTimerObservable();

    this.weather_mexico_city$ = this.getTimerObservable();
    this.weather_monterrey$ = this.getErrorObservable();

  }

  ngOnInit() {

    this.weather_syndney$.subscribe(item => {
      this.weather_syndney = item;

    });


    this.weather_lithgow$.subscribe(item => {
      this.weather_lithgow = item;

    });


    this.subscription_mexico_city = this.weather_mexico_city$.subscribe(item => {
      this.weather_mexico_city = item;
    });




    setTimeout(()=> {
      this.subscription_mexico_city.unsubscribe();
    }, 5000);

    this.weather_monterrey$.subscribe(item => {
      this.weather_monterrey = item;
    }, error=> {
      console.log("ERROR", error);
    }, ()=> {
      console.log("se completo");
    });
  }



  getCompletedObservable(): Observable<number> {

    return new Observable(observer => {
      observer.next(this.getRandom());
      observer.complete();
    })

  }

  getTimerObservable(): Observable<number> {

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




  getErrorObservable(): Observable<number> {

    return new Observable(observer => {

      observer.next(this.getRandom());

      setTimeout(()=> {
        observer.next(this.getRandom());

      }, 4000);


      setTimeout(()=> {
        observer.error('No pudimos terminar');

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
