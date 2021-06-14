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



const routes: Routes = [{
  path: 'componente_externos',
  component: ExternalComponentComponent
}, {
  path: 'componente_internos',
  component: InternalComponentComponent
}, {
  path: 'componentes_externo_web',
  component: WebComponentComponent
}, {
  path: 'routing_params',
  component: RoutingParamsComponent,
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
  }
  ]
}, {
  path: 'routing_query_params',
  component: RoutingQueryParamsComponent
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
