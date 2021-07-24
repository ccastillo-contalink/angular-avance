//https://angular.io/guide/static-query-migration#should-i-use-static-true


import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { from, fromEvent } from 'rxjs'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, AfterViewInit {

  @Input() public producto: {name: string};

  @ViewChild("item",  { static: false})  li: ElementRef<HTMLElement>;
  
  private selected: boolean=false; 

  constructor() {

   }

  ngOnInit() {
  }

  public isSelected(): boolean{
    return this.selected;
  }


  ngAfterViewInit(){

    fromEvent(this.li.nativeElement, 'click').subscribe(event=> {
      this.selected= !this.selected;
      if(this.selected){
        this.li.nativeElement.style.backgroundColor='green';
      }else {
        this.li.nativeElement.style.backgroundColor='transparent';
      }
    })



  }


}
