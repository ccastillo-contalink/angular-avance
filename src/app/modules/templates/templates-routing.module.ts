import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesComponent } from './pages/templates/templates.component';
import { LoadingComponent } from './pages/loading/loading.component'
import { ViewsComponent } from './views/views.component'
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component'

const routes: Routes = [
  { path: 'content', component: TemplatesComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'views', component: ViewsComponent },
  { path: 'dynamic-componets', component: DynamicComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
