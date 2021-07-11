import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {  fromEvent, BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  @ViewChild('departament', { static: true }) departament: ElementRef;
  @ViewChild('category', { static: true }) category: ElementRef;

  params$: BehaviorSubject<any>;

  destroy$: Subject<boolean>= new Subject<boolean>();


  constructor(private route: Router, private activatedRoute: ActivatedRoute) {

    this.params$ = new BehaviorSubject({
      queryParams: this.activatedRoute.snapshot.queryParams,
      params: this.activatedRoute.snapshot.params
    });

  }

  ngOnInit() {


    fromEvent(this.departament.nativeElement, 'change').pipe(
      takeUntil(this.destroy$),
      map((event: any) => event.target.value)).
    subscribe((value: string) => {
      this.route.navigate(['observable/shop', value]);

    });

    fromEvent(this.category.nativeElement, 'change').pipe(
      takeUntil(this.destroy$),
      map((event: any)=> event.target.value)
    ).subscribe((value: string) => {

      this.route.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams: { category: value },
          queryParamsHandling: 'merge'
        });

    });


    this.activatedRoute.queryParams.pipe(
      takeUntil(this.destroy$),
      withLatestFrom(this.activatedRoute.params)
    ).subscribe(params=> {
      this.params$.next({
        queryParams: params[0],
        params: params[1]
      });

    });

    this.activatedRoute.params.pipe(
      takeUntil(this.destroy$),
      withLatestFrom(this.activatedRoute.queryParams)
    ).subscribe(params=> {

      this.params$.next({
        queryParams: params[1],
        params: params[0]
      });

    });


    this.params$.subscribe(value=> {
      console.log(value);
    })


    



  }

  public ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.complete();
    this.params$.complete();
    
  }

}
