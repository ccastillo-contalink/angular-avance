import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableComponent } from './observable.component';
import { CrudComponent } from './components/crud/crud.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';
import { InvoiceComponent } from './components/invoice/invoice.component'

const routes: Routes = [
  { path: '', component: ObservableComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'search', component: SearchComponent },
  { path: 'invoice', component: InvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
