import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUserEditComponent } from './edit.component';

describe('PainelUserEditComponent', () => {
  let component: PainelUserEditComponent;
  let fixture: ComponentFixture<PainelUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
