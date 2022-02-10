import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaprComponent } from './javapr.component';

describe('JavaprComponent', () => {
  let component: JavaprComponent;
  let fixture: ComponentFixture<JavaprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
