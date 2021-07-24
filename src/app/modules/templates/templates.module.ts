import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './pages/templates/templates.component';
import { SharedModule} from '../../modules/shared/shared.module';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProductosComponent } from './pages/loading/productos/productos.component';
import { ViewsComponent } from './views/views.component';
import { AlertComponent } from './views/alert/alert.component';
import { ProductoComponent } from './views/producto/producto.component';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { Card1Component } from './pages/dynamic-components/card1/card1.component';
import { Card2Component } from './pages/dynamic-components/card2/card2.component';
import { Card3Component } from './pages/dynamic-components/card3/card3.component'

@NgModule({
  declarations: [TemplatesComponent, LoadingComponent, ProductosComponent, ViewsComponent, AlertComponent, ProductoComponent, DynamicComponentsComponent, Card1Component, Card2Component, Card3Component],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule
  ], entryComponents: [Card1Component, Card2Component, Card3Component]
})
export class TemplatesModule { }
