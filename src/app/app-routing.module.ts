import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponentComponent } from './components/external-component/external-component.component';
import { InternalComponentComponent } from './components/internal-component/internal-component.component';
import { WebComponentComponent } from './components/web-component/web-component.component';

const routes: Routes = [{
  path: 'componente_externos',
  component: ExternalComponentComponent
}, {
  path: 'componente_internos',
  component: InternalComponentComponent
}, {
  path: 'componentes_externo_web',
  component: WebComponentComponent
},
{
  path: 'module_carga_lenta',
  loadChildren: () => import('./modules/lazy-loading-module/lazy-loading-module.module').then(m => m.LazyLoadingModuleModule)
},
{
  path: 'routing',
  loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
