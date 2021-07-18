import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  list: any = [[
    {
      id: 1,
      name:
        'Factura 1'
    },
    {
      id: 2,
      name:
        'Factura 2'
    },
    {
      id: 3,
      name:
        'Factura 3'
    },
    {
      id: 1,
      name:
        'Factura 3'
    }
  ] , [
    {
      id: 5,
      name:
        'Factura 5'
    },
    {
      id: 6,
      name:
        'Factura 6'
    },
    {
      id: 7,
      name:
        'Factura 7'
    },
    {
      id: 8,
      name:
        'Factura 8'
    }
  ]];

  public dragging: any;

  constructor() {

  }


  public add(no: number){
    this.list[no].push(this.dragging.item);
  }




  public remove(){

    let no = this.dragging.no;
    let remove_item = this.dragging.item;
    let index = this.list[no].findIndex(item=> item.id === remove_item.id);
    this.list[no].splice(index, 1);


  }

 
}
