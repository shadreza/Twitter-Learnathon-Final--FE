import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthCComponent } from './user-auth-c.component';

describe('UserAuthCComponent', () => {
  let component: UserAuthCComponent;
  let fixture: ComponentFixture<UserAuthCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
