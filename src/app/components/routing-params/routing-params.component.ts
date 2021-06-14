import { Component, OnInit } from '@angular/core';
import { User} from '../../model/user';

@Component({
  selector: 'app-routing-params',
  templateUrl: './routing-params.component.html',
  styleUrls: ['./routing-params.component.css']
})
export class RoutingParamsComponent implements OnInit {

  public user: User= {
    id:'1',
    address_id: '1',
    name:'Sr Angular'
  }

  constructor() { }

  ngOnInit() {
  }

}
