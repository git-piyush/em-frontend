import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedjavaComponent } from './advancedjava.component';

describe('AdvancedjavaComponent', () => {
  let component: AdvancedjavaComponent;
  let fixture: ComponentFixture<AdvancedjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
