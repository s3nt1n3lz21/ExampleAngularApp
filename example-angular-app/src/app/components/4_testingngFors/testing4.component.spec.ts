import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing4Component } from './testing4.component';

describe('Testing NgFors', () => {
  let component: Testing4Component;
  let componentFixture: ComponentFixture<Testing4Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing4Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing4Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  describe('queryAll', () => {
    it('should show the correct number of elements', () => {
      component.messages = ['a','b','c'];
      
      componentFixture.detectChanges();

      const elements = componentFixture.debugElement.queryAll(By.css('.rows'));
      expect(elements.length).toEqual(3);
    });
  
    it('should pass down the correct data to its child components', () => {
      component.messages = ['a','b','c'];
      
      componentFixture.detectChanges();

      const elements = componentFixture.debugElement.queryAll(By.css('.rows'));
      for (let i = 0; i < component.messages.length; i++) {
          expect(elements[i].nativeElement.innerText).toEqual(component.messages[i]);
      }
    });
  });

  describe('querySelectorAll', () => {
    it('should show the correct number of elements', () => {
      component.messages = ['a','b','c'];
      
      componentFixture.detectChanges();

      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('.rows');
      expect(elements.length).toEqual(3);
    });
  
    it('should pass down the correct data to its child components', () => {
      component.messages = ['a','b','c'];

      componentFixture.detectChanges();

      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('.rows');
      for (let i = 0; i < component.messages.length; i++) {
          expect(elements[i].innerText).toEqual(component.messages[i]);
      }
    });
  });
});
