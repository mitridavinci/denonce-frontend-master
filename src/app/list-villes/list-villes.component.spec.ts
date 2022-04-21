import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVillesComponent } from './list-villes.component';

describe('ListVillesComponent', () => {
  let component: ListVillesComponent;
  let fixture: ComponentFixture<ListVillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
