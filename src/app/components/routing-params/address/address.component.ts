import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public address_id: string;

  constructor(private activatedRouter: ActivatedRoute) { 

  }


  ngOnInit() {

    this.address_id  = this.activatedRouter.snapshot.params.id;



  }

}
