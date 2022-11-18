import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptionCComponent } from './nav-option-c.component';

describe('NavOptionCComponent', () => {
  let component: NavOptionCComponent;
  let fixture: ComponentFixture<NavOptionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOptionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOptionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
