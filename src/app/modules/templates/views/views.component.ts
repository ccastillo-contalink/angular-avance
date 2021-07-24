import { Component, OnInit , ViewChild, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {ProductoComponent} from './producto/producto.component';


@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit, AfterViewInit {

  @ViewChild(AlertComponent, {static: false} ) alert: AlertComponent;

  @ViewChildren("izquierdo", { read: ProductoComponent}) lista1:QueryList<ProductoComponent>;

  

  productos1: {name: string; id: number; }[]= [{
    name:'Producto 1',
    id: 1
  },{
    name:'Producto 2', 
    id:2
  },{
    name:'Producto 3',
    id: 3
  },{
    name:'Producto 4',
    id: 4

  }]


  productos2: {name: string; id: number;}[]= [{
    name:'Producto 5',
    id: 5
  },{
    name:'Producto 6',
    id: 6
  },{
    name:'Producto 7',
    id: 7
  },{
    name:'Producto 8',
    id: 8
  }]

  constructor() {

   }

   move(){
     
    this.lista1.forEach((component: ProductoComponent, index: number)=>{
      if(component.isSelected()){
        this.productos2.push(this.productos1[index]);
      }
    })

    this.productos1= this.productos1.filter(item1=> {
      let find = this.productos2.findIndex(item2=> item2.id === item1.id );
      return !(find > -1);
    })

    this.alert.activate();

    this.alert.setName('Se han movido los archivos');

    

   }

  ngOnInit() {

  }

  ngAfterViewInit(){
  }

  

}
