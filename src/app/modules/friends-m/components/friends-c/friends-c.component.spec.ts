import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsCComponent } from './friends-c.component';

describe('FriendsCComponent', () => {
  let component: FriendsCComponent;
  let fixture: ComponentFixture<FriendsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
