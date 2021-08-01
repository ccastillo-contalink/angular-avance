import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-change-detenction-ref',
  templateUrl: './change-detenction-ref.component.html',
  styleUrls: ['./change-detenction-ref.component.css']
})
export class ChangeDetenctionRefComponent implements OnInit, AfterViewInit {

  productos: any[] = [];

  @ViewChild('button', { static: false, read: ElementRef }) button: ElementRef;

  constructor(private detector: ChangeDetectorRef) {

  }

  ngOnInit() {



  }



  public add() {



    this.productos.push({
      id: this.productos.length
    });

  

  }

  public ngAfterViewInit() {

    fromEvent(this.button.nativeElement, 'click').
      pipe(
        tap(() => this.add()), 
        debounceTime(1000))
      .subscribe(event => {
        this.detector.detectChanges();
      });

      this.detector.detach();

  }

}
