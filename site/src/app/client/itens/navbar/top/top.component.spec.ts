import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientNavbarTopComponent } from './top.component';

describe('TopComponent', () => {
  let component: ClientNavbarTopComponent;
  let fixture: ComponentFixture<ClientNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
