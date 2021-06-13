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


@NgModule({
  declarations: [
    AppComponent,
    ExternalComponentComponent,
    InternalComponentComponent,
    WebComponentComponent,
    ManagerComponent,
    AdminComponent,
    ArtComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
