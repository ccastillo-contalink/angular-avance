import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableComponent } from './observable.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  { path: '', component: ObservableComponent },
  { path: 'crud', component: CrudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
