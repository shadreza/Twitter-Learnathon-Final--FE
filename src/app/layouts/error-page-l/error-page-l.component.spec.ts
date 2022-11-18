import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageLComponent } from './error-page-l.component';

describe('ErrorPageLComponent', () => {
  let component: ErrorPageLComponent;
  let fixture: ComponentFixture<ErrorPageLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
