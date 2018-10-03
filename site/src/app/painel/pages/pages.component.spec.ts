import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPagesComponent } from './pages.component';

describe('PainelPagesComponent', () => {
  let component: PainelPagesComponent;
  let fixture: ComponentFixture<PainelPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
