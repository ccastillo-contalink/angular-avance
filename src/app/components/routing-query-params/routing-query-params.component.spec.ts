import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingQueryParamsComponent } from './routing-query-params.component';

describe('RoutingQueryParamsComponent', () => {
  let component: RoutingQueryParamsComponent;
  let fixture: ComponentFixture<RoutingQueryParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingQueryParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
