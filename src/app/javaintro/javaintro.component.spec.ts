import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaintroComponent } from './javaintro.component';

describe('JavaintroComponent', () => {
  let component: JavaintroComponent;
  let fixture: ComponentFixture<JavaintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
