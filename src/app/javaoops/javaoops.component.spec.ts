import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaoopsComponent } from './javaoops.component';

describe('JavaoopsComponent', () => {
  let component: JavaoopsComponent;
  let fixture: ComponentFixture<JavaoopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaoopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
