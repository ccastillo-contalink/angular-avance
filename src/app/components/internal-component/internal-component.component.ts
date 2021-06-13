import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-internal-component',
  templateUrl: './internal-component.component.html',
  styleUrls: ['./internal-component.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class InternalComponentComponent implements OnInit {

  public employees: Employee[] = [{
    type: 'Admin'
  }, {
    type: 'Web'
  }, {
    type: 'Art'
  }, {
    type: 'Manager'

  }]



  constructor() { }

  ngOnInit() {
  }

}
