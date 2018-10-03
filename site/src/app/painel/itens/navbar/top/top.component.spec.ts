import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelNavbarTopComponent } from './top.component';

describe('PainelNavbarTopComponent', () => {
  let component: PainelNavbarTopComponent;
  let fixture: ComponentFixture<PainelNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
