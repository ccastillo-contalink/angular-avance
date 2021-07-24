import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

   name: string;

   active: boolean= false;

  constructor() { 

  }

  ngOnInit() {
  }


  public setName(name: string){
    this.name= name;

  }

  public activate(): void{
    this.active = true;

  }

}
