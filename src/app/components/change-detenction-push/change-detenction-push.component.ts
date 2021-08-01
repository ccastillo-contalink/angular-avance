import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { Card} from '../../model/card';


/*


interface Producto{
    name: string;
    id: string;
    price: number;
}


let producto1 = {
    name: 'Hola',
    id: '23rsffsgdfdf',
    price: 12
}

let producto2 = producto1;
//console.log(producto1 !== producto2);

producto2.name = 'Hola2';
//console.log(producto1 !== producto2);


let list1: any= {
    lista: []
};

let list2 = list1;

list2.lista.push({
    name: 'Hola',
    id: '23rsffsgdfdf',
    price: 12
});

console.log(list1 !== list2);

*/


@Component({
  selector: 'app-change-detenction-push',
  templateUrl: './change-detenction-push.component.html',
  styleUrls: ['./change-detenction-push.component.css']
})
export class ChangeDetenctionPushComponent implements OnInit {

  card1:Card= {
    header: 'Header 1',
    body: 'Body 1',
    footer: 'Footter 1',
    id:1
  };
  
  card2:Card={
    header: 'Header 2',
    body: 'Body 2',
    footer: 'Footter 2', 
    id:2
  }


  constructor() { 

  }

  ngOnInit() {

    setTimeout(()=> {
      console.log("colocando titulo 1");

      this.card1 = {...this.card1, header: 'Titulo 1' };
      
      //this.card1.header= 'Titulo 1';

    }, 1000);

    setTimeout(()=> {
      console.log("colocando titulo2");
      this.card2 = {...this.card2, header: 'Titulo 2' };

      //this.card2.header= 'Titulo 2';

    }, 2000);

    setTimeout(()=> {
      console.log("colocando cuerpo1");
      this.card1 = {...this.card1, body: 'Cuerpo 1' };

      //this.card1.body= 'Cuerpo 1';

    }, 3000);
  }

}



