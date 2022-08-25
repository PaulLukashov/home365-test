import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesListFiltersComponent } from './properties-list-filters.component';

describe('PropertiesListFiltersComponent', () => {
  let component: PropertiesListFiltersComponent;
  let fixture: ComponentFixture<PropertiesListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
