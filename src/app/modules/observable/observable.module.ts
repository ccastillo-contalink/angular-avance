import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { CrudComponent } from './components/crud/crud.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';

import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './services/movies.service';


import {ReactiveFormsModule} from '@angular/forms';
import { InvoiceComponent } from './components/invoice/invoice.component'

@NgModule({
  declarations: [ObservableComponent, CrudComponent, WeatherComponent, SearchComponent, InvoiceComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [MoviesService]
})
export class ObservableModule { }
