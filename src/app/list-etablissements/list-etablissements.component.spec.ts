import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtablissementsComponent } from './list-etablissements.component';

describe('ListEtablissementsComponent', () => {
  let component: ListEtablissementsComponent;
  let fixture: ComponentFixture<ListEtablissementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEtablissementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
