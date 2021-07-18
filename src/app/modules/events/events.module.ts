import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './pages/events.component';
import { DropDirective } from './directives/drop.directive';
import { DragDirective } from './directives/drag.directive';


@NgModule({
  declarations: [EventsComponent, DropDirective, DragDirective],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
