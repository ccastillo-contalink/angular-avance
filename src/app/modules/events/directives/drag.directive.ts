import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { ListsService } from '../services/lists.service';

@Directive({
  selector: '[appDrag]'
})


export class DragDirective {


  @Input() item: any;
  @Input() no_list: number;

  constructor(private service: ListsService) {

  }

  @HostBinding('style.border') border: string;



  @HostListener('mouseover')
  onMouseOver(){
    this.border = '5px solid green';


  }



  @HostListener('mouseout')
  onMouseOut(){
    this.border = 'none';


  }


  @HostListener('dragstart', ['$event'])
  onDrag(event: any) {
    this.service.dragging = { no: this.no_list, item: this.item };

  }

}
