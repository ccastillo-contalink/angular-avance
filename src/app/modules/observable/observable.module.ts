import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { CrudComponent } from './components/crud/crud.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';

import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './services/movies.service';


@NgModule({
  declarations: [ObservableComponent, CrudComponent, WeatherComponent, SearchComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule, HttpClientModule
  ],
  providers: [MoviesService]
})
export class ObservableModule { }
