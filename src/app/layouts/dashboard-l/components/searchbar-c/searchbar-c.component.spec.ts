import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarCComponent } from './searchbar-c.component';

describe('SearchbarCComponent', () => {
  let component: SearchbarCComponent;
  let fixture: ComponentFixture<SearchbarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
