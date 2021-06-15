import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-query-params',
  templateUrl: './routing-query-params.component.html',
  styleUrls: ['./routing-query-params.component.css']
})
export class RoutingQueryParamsComponent implements OnInit {

  constructor(private activated: ActivatedRoute) {

   }

  ngOnInit() {
    this.activated.queryParams.subscribe(value=> {
      console.log(value);
    })
  }

}
