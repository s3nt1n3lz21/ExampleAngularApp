import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { configureTestingModule } from './testing-utils';

describe('AppComponent', () => {
  let component: AppComponent;
  let componentFixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    configureTestingModule({
        declarations: [
          AppComponent
        ],
    }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(AppComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  function cleanStylesFromDOM(): void {
    const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
    const styles: HTMLCollectionOf<HTMLStyleElement> | [] = head.getElementsByTagName('style');

    for (let i = 0; i < styles.length; i++) {
        head.removeChild(styles[i]);
    }
  }

  afterAll(() => {
      cleanStylesFromDOM();
  });
});
