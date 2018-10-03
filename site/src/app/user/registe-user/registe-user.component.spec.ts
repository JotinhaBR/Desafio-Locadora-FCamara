import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteUserComponent } from './registe-user.component';

describe('RegisteUserComponent', () => {
  let component: RegisteUserComponent;
  let fixture: ComponentFixture<RegisteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
