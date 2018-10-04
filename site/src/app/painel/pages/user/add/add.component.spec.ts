import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUserAddComponent } from './add.component';

describe('PainelUserAddComponent', () => {
  let component: PainelUserAddComponent;
  let fixture: ComponentFixture<PainelUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
