import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavabasicsComponent } from './javabasics.component';

describe('JavabasicsComponent', () => {
  let component: JavabasicsComponent;
  let fixture: ComponentFixture<JavabasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavabasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavabasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
