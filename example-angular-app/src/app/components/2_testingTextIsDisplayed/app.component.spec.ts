import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('Testing Text Is Displayed', () => {
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

  describe('query', () => {
    it('should display the welcome back text', () => {
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element.nativeElement.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('queryAll', () => {
    it('should display the welcome back text', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0].nativeElement.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('querySelector', () => {
    it('should display the welcome back text', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('querySelectorAll', () => {
    it('should display the welcome back text', () => {
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(elements[0].innerText.trim()).toEqual('Welcome Back!');
    });
  })
});
