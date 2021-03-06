import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecoverPasswordComponent } from './recover-password.component';

describe('UserRecoverPasswordComponent', () => {
  let component: UserRecoverPasswordComponent;
  let fixture: ComponentFixture<UserRecoverPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecoverPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
