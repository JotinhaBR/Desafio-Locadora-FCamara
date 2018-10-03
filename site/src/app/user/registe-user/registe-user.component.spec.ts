import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteUserComponent } from './registe-user.component';

describe('UserRegisteUserComponent', () => {
  let component: UserRegisteUserComponent;
  let fixture: ComponentFixture<UserRegisteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
