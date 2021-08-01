import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetenctionPushComponent } from './change-detenction-push.component';

describe('ChangeDetenctionPushComponent', () => {
  let component: ChangeDetenctionPushComponent;
  let fixture: ComponentFixture<ChangeDetenctionPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetenctionPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetenctionPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
