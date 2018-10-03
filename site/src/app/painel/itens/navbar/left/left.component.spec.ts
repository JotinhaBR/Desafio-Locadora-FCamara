import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelNavbarLeftComponent } from './left.component';

describe('PainelNavbarLeftComponent', () => {
  let component: PainelNavbarLeftComponent;
  let fixture: ComponentFixture<PainelNavbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelNavbarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelNavbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
