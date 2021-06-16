import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChildComponent } from '../childComponent/child.component';
import { AppComponent } from './app.component';
import { App1ComponentModule } from './app.component.module';

describe('Testing Components Are Displayed', () => {
  let component: AppComponent;
  let componentFixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
            AppComponent,
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
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.query(By.css('app-child-component'));
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.query(By.css('.title'));
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element).toBeTruthy();
    });

    it('should get the element by name of the component', () => {
      const element = componentFixture.debugElement.query(By.directive(ChildComponent));
      console.log('element: ', element);
      expect(element).toBeTruthy();
    })
  })

  describe('queryAll', () => {
    it('should get the element by selector', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('app-child-component'));
      expect(elements[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('.title'));
      expect(elements[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0]).toBeTruthy();
    });

    it('should get the element by name of the component', () => {
      const element = componentFixture.debugElement.queryAll(By.directive(ChildComponent));
      console.log('element: ', element);
      expect(element).toBeTruthy();
    })
  })

  describe('querySelector', () => {
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('app-child-component');
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('.title');
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element).toBeTruthy();
    });

    it('should get the element by name of the component', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector(By.directive(ChildComponent));
      console.log('element: ', element);
      expect(element).toBeTruthy();
    })
  })

  describe('querySelectorAll', () => {
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('app-child-component');
      expect(element[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('.title');
      expect(element[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(element[0]).toBeTruthy();
    });

    it('should get the element by name of the component', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll(By.directive(ChildComponent));
      console.log('element: ', element);
      expect(element).toBeTruthy();
    })
  })
});
