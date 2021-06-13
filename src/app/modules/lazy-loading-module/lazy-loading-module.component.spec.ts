import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingModuleComponent } from './lazy-loading-module.component';

describe('LazyLoadingModuleComponent', () => {
  let component: LazyLoadingModuleComponent;
  let fixture: ComponentFixture<LazyLoadingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadingModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
