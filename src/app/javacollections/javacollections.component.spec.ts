import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacollectionsComponent } from './javacollections.component';

describe('JavacollectionsComponent', () => {
  let component: JavacollectionsComponent;
  let fixture: ComponentFixture<JavacollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavacollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
