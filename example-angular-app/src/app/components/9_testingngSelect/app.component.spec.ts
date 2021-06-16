import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('Testing NgSelect', () => {
  let component: AppComponent;
  let componentFixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
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

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  // it('should display the welcome back text', () => {
  //   const element = componentFixture.debugElement.query(By.css('#someId'));
  //   expect(element.nativeElement.innerText.trim()).toEqual('Welcome back!');
  // });
});
