import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../../services/clothing.service';
import { Product } from '../../../../model/product';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [ClothingService]
})
export class CrudComponent implements OnInit {

  products$: Observable<Product[]>;



  constructor(private clothingService: ClothingService) {

   }

  ngOnInit() {
    this.products$ = this.clothingService.getProducts()
    .pipe(map(products=> {

      for(let index=0; index< products.length; index++){
        products[index].amount = products[index].price *  products[index].quantity; 
      }

      return products;

    }));

  }

}
