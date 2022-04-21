import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuartiersComponent } from './list-quartiers.component';

describe('ListQuartiersComponent', () => {
  let component: ListQuartiersComponent;
  let fixture: ComponentFixture<ListQuartiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQuartiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuartiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
