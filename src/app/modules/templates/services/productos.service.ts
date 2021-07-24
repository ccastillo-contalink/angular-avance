import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {



  constructor() { 

  }


  public getProductos(): Observable<any[]> {

    let productos: any[]=[];

    for(let i=0; i< 20; i++){
      productos.push({
        name: 'producto ' + i,
        descripcion: 'description '  + i
      })
    }

    return of(productos).pipe(delay(2000));

  }
}
