import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../services/productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  providers:  [ProductosService]
})
export class LoadingComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {

  }

}
