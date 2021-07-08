import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../../services/clothing.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [ClothingService]
})
export class CrudComponent implements OnInit {



  constructor(private clothingService: ClothingService) { }

  ngOnInit() {
  }

}
