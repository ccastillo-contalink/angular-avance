import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalComponentComponent } from './components/external-component/external-component.component';
import { InternalComponentComponent } from './components/internal-component/internal-component.component';
import { WebComponentComponent } from './components/web-component/web-component.component';
import {SharedModule } from './modules/shared/shared.module';
import { ManagerComponent } from './components/internal-component/manager/manager.component';
import { AdminComponent } from './components/internal-component/admin/admin.component';
import { ArtComponent } from './components/internal-component/art/art.component';
import { WebComponent } from './components/internal-component/web/web.component'
import { QuillModule } from 'ngx-quill';
import { RoutingParamsComponent } from './components/routing-params/routing-params.component';
import { RoutingQueryParamsComponent } from './components/routing-query-params/routing-query-params.component'

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponentComponent,
    InternalComponentComponent,
    WebComponentComponent,
    ManagerComponent,
    AdminComponent,
    ArtComponent,
    WebComponent,
    RoutingParamsComponent,
    RoutingQueryParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    QuillModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
