import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenonciationComponent } from './denonciation.component';

describe('DenonciationComponent', () => {
  let component: DenonciationComponent;
  let fixture: ComponentFixture<DenonciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenonciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenonciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
