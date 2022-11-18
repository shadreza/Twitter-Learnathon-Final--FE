import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsCComponent } from './feeds-c.component';

describe('FeedsCComponent', () => {
  let component: FeedsCComponent;
  let fixture: ComponentFixture<FeedsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
