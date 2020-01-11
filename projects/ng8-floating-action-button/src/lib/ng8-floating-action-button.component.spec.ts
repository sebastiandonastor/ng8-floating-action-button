import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng8FloatingActionButtonComponent } from './ng8-floating-action-button.component';

describe('Ng8FloatingActionButtonComponent', () => {
  let component: Ng8FloatingActionButtonComponent;
  let fixture: ComponentFixture<Ng8FloatingActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng8FloatingActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng8FloatingActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
