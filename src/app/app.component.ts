import { Component, OnInit } from '@angular/core';

import { Menu } from './model/menu';
import { Message, TypeMessage } from './model/message';
import { Observable } from 'rxjs';
import { MessageService } from './services/message.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  open_menu: boolean = false;

  alert$: Observable<Message>;

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
      path: 'observable/crud'
    }, {
      title: 'Weather',
      path: 'observable/weather'
    }, {
      title: 'Search',
      path: 'observable/search'
    }, {
      title: 'Invoice',
      path: 'observable/invoice'
    }, {
      title: 'Shop',
      path: 'observable/shop/ropa'
    }
    ]
  }, {
    title: 'Eventos',
    path: 'events'
  }, {
    title: 'Templates',
    key: 'templates',
    children: [{
      title: 'Contenido',
      path: 'templates/content'
    }, {
      title: 'Loading',
      path: 'templates/loading'
    },{
      title: 'Views',
      path: 'templates/views'
    }, {
      title: 'Dynamic Components',
      path: 'templates/dynamic-componets'
    }
    ]
  }
  ]

  constructor(private alertService: NotifierService, private notif: MessageService) {

    this.alert$ = this.notif.notify.asObservable();

  }


  public ngOnInit() {
    this.alert$.subscribe(message => {

      if (message.type === TypeMessage.SUCCESS) {
        this.alertService.notify('success', message.message);
      } else if (message.type === TypeMessage.ERROR) {
        this.alertService.notify('error', message.message);
      }
    })
  }



}
