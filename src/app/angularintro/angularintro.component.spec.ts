import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularintroComponent } from './angularintro.component';

describe('AngularintroComponent', () => {
  let component: AngularintroComponent;
  let fixture: ComponentFixture<AngularintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
