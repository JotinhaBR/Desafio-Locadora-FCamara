import { TestBed, async } from '@angular/core/testing';
import { PainelComponent } from './painel.component';

describe('PainelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PainelComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PainelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'site'`, () => {
    const fixture = TestBed.createComponent(PainelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('site');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PainelComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to site!');
  });
});
