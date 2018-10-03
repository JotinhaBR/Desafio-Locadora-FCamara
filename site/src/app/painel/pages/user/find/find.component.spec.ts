import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUserFindComponent } from './find.component';

describe('PainelUserFindComponent', () => {
  let component: PainelUserFindComponent;
  let fixture: ComponentFixture<PainelUserFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelUserFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUserFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
