import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDenonciationComponent } from './update-denonciation.component';

describe('UpdateDenonciationComponent', () => {
  let component: UpdateDenonciationComponent;
  let fixture: ComponentFixture<UpdateDenonciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDenonciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDenonciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
