import { Component } from '@angular/core';
import { Menu } from './model/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open_menu: boolean = false;

  public menus: Menu[] = [{
    title: 'Modulos',
    key: 'modulos',
    children: [
      {
        title: 'Componente de Modulos Externos',
        path: 'componente_externos'
      }, {
        title: 'Componentes Internos',
        path: 'componente_internos'
      }, {
        title: 'Componentes Externos Web',
        path: 'componentes_externo_web'
      }, {
        title: 'Modulo Carga Lenta',
        path: 'module_carga_lenta'
      }
    ]

  }, {
    title: 'Routing',
    key: 'routing',
    children: [
      {
        title: 'Ruteo con Parametros',
        path: 'routing_params'
      }, {
        title: 'Routeo con Parametros de Consulta',
        path: 'routing_query_params'
      }, {
        title: 'Routeo con Modulos Retardados',
        path: 'routing'
      }
    ]
  },
  {
    title: 'Observable',
    key: 'observable',
    children: [{
      title: 'Simple CRUD',
      path: 'crud'
    }
    ]
  }
  ]



}
