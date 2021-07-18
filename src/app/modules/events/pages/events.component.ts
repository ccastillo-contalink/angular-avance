import { Component, OnInit } from '@angular/core';
import {ListsService} from '../services/lists.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [ListsService]
})
export class EventsComponent implements OnInit {

  constructor(public service: ListsService) {

   }

  ngOnInit() {

  }

}
