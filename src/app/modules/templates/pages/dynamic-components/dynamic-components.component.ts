import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

import {Card1Component} from './card1/card1.component';
import {Card2Component} from './card2/card2.component';
import {Card3Component} from './card3/card3.component';
//https://ramya-bala221190.medium.com/simple-example-to-understand-how-dynamic-components-work-2744adf0b5d8

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true })  container: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

   }

  ngOnInit() {
    let dynamicComponentFactory1 = this.componentFactoryResolver.resolveComponentFactory(Card1Component);  
    // add the component to the view  
    let dynamicComponentFactory2 = this.componentFactoryResolver.resolveComponentFactory(Card2Component);  
    let dynamicComponentFactory3 = this.componentFactoryResolver.resolveComponentFactory(Card3Component);  

    
    this.container.createComponent(dynamicComponentFactory1); 

    this.container.createComponent(dynamicComponentFactory2); 
    this.container.createComponent(dynamicComponentFactory3); 




  }

}
