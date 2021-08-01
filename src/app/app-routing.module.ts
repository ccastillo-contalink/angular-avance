import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponentComponent } from './components/external-component/external-component.component';
import { InternalComponentComponent } from './components/internal-component/internal-component.component';
import { WebComponentComponent } from './components/web-component/web-component.component';
import { RoutingParamsComponent } from './components/routing-params/routing-params.component';
import { RoutingQueryParamsComponent } from './components/routing-query-params/routing-query-params.component';

import { PostsComponent } from './components/routing-params/posts/posts.component';
import { AboutComponent } from './components/routing-params/about/about.component';
import { PhotosComponent } from './components/routing-params/photos/photos.component';
import { VideosComponent } from './components/routing-params/videos/videos.component';
import { FriendsComponent } from './components/routing-params/friends/friends.component'
import { AddressComponent } from './components/routing-params/address/address.component'
import { LoginComponent } from './components/login/login.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChangeDetenctionRefComponent } from './components/change-detenction-ref/change-detenction-ref.component';
import { ChangeDetenctionPushComponent } from './components/change-detenction-push/change-detenction-push.component';



const routes: Routes = [{
  path: '',
  redirectTo: 'componente_externos',
  pathMatch: 'full'
},
{
  path: 'componente_externos',
  component: ExternalComponentComponent,
}, {
  path: 'componente_internos',
  component: InternalComponentComponent,
  canActivate: [IsAuthGuard]

}, {
  path: 'componentes_externo_web',
  component: WebComponentComponent,

}, {
  path: 'routing_params',
  component: RoutingParamsComponent,
  canActivateChild: [IsAuthGuard],
  children: [{
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  }, {
    path: 'videos',
    component: VideosComponent
  }, {
    path: 'friends',
    component: FriendsComponent
  }, {
    path: 'addresses/:id',
    component: AddressComponent
  }
  ]
}, {
  path: 'routing_query_params',
  component: RoutingQueryParamsComponent
},
{
  path: 'module_carga_lenta',
  loadChildren: () => import('./modules/lazy-loading-module/lazy-loading-module.module').then(m => m.LazyLoadingModuleModule),
  canLoad: [IsAuthGuard]
},
{
  path: 'routing',
  loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)
},
{ path: 'observable', loadChildren: () => import('./modules/observable/observable.module').then(m => m.ObservableModule) },
{ path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule) },
{ path: 'templates', loadChildren: () => import('./modules/templates/templates.module').then(m => m.TemplatesModule) },
{ path: 'login', component: LoginComponent },
{ path: 'change-detection-ref', component: ChangeDetenctionRefComponent },
{ path: 'change-detection-push', component: ChangeDetenctionPushComponent },
{ path: '404', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
