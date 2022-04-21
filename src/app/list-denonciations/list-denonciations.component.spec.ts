import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDenonciationsComponent } from './list-denonciations.component';

describe('ListDenonciationsComponent', () => {
  let component: ListDenonciationsComponent;
  let fixture: ComponentFixture<ListDenonciationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDenonciationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDenonciationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
