import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { Card} from '../../../model/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }


  print(){
    console.log("impromiento" + this.card.id);
  }

}
