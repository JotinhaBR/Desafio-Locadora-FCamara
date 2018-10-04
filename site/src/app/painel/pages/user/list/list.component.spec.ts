import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUserListComponent } from './list.component';

describe('PainelUserListComponent', () => {
  let component: PainelUserListComponent;
  let fixture: ComponentFixture<PainelUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
