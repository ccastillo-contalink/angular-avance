import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  private products: Array<Product> = [{
    title: 'Pantalon ',
    size: 'XL',
    price: 200,
    quantity: 2
  }, {
    title: 'Playera ',
    size: 'CH',
    price: 100,
    quantity: 2
  }, {
    title: 'Falda ',
    size: 'XL',
    price: 250,
    quantity: 1
  }, {
    title: 'Short ',
    size: 'L',
    price: 12,
    quantity: 2
  }, {
    title: 'Vestido',
    size: 'XL',
    price: 1000,
    quantity: 1
  }, {
    title: 'Saco ',
    size: 'XL',
    price: 550,
    quantity: 2
  }, {
    title: 'Traje ',
    size: 'XL',
    price: 260,
    quantity: 1
  }];



  constructor() {


  }


  getProducts(): Observable<Product[]> {
    return of(this.products);
  }


  
}
