import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesComponent } from './pages/templates/templates.component';
import { LoadingComponent } from './pages/loading/loading.component'

const routes: Routes = [
  { path: 'content', component: TemplatesComponent },
  { path: 'loading', component: LoadingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
