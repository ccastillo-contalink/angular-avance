import { Directive, Input, HostListener } from '@angular/core';
import {ListsService} from '../services/lists.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input() no_list: number;


  constructor(private service: ListsService) { }


  @HostListener('dragover', ['$event'])
   onDragover(event: any) {
    event.preventDefault();
  }


  @HostListener('drop', ['$event'])
   onDrop(event: any) {
    event.preventDefault();
    this.service.remove();
    this.service.add(this.no_list);

  }

}
