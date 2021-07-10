import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { CrudComponent } from './components/crud/crud.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [ObservableComponent, CrudComponent, WeatherComponent, SearchComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class ObservableModule { }
