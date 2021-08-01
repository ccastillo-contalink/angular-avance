import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetenctionRefComponent } from './change-detenction-ref.component';

describe('ChangeDetenctionRefComponent', () => {
  let component: ChangeDetenctionRefComponent;
  let fixture: ComponentFixture<ChangeDetenctionRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetenctionRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetenctionRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
