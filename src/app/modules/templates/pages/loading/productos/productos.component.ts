import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos$: Observable<any[]>;

  @Input() customTemplate: TemplateRef<any>;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {

    this.productos$ = this.productosService.getProductos();
  }

}

