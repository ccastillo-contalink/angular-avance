import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './pages/templates/templates.component';
import { SharedModule} from '../../modules/shared/shared.module';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProductosComponent } from './pages/loading/productos/productos.component';
import { ViewsComponent } from './views/views.component';
import { AlertComponent } from './views/alert/alert.component';
import { ProductoComponent } from './views/producto/producto.component'

@NgModule({
  declarations: [TemplatesComponent, LoadingComponent, ProductosComponent, ViewsComponent, AlertComponent, ProductoComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule
  ]
})
export class TemplatesModule { }
