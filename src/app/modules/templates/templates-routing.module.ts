import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesComponent } from './pages/templates/templates.component';
import { LoadingComponent } from './pages/loading/loading.component'
import { ViewsComponent } from './views/views.component'

const routes: Routes = [
  { path: 'content', component: TemplatesComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'views', component: ViewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
