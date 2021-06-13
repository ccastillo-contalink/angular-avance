import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalComponentComponent } from './external-component.component';

describe('ExternalComponentComponent', () => {
  let component: ExternalComponentComponent;
  let fixture: ComponentFixture<ExternalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
