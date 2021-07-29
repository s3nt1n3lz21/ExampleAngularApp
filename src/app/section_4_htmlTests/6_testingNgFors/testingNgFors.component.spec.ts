import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingNgForsComponent } from './testingNgFors.component';

describe('Testing NgFors', () => {
  let component: TestingNgForsComponent;
  let componentFixture: ComponentFixture<TestingNgForsComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingNgForsComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingNgForsComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  describe('queryAll', () => {
    it('should show the correct number of elements', () => {
      //Assign
      component.messages = ['a','b','c'];
      
      //Act
      componentFixture.detectChanges();

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('.row'));
      expect(elements.length).toEqual(3);
    });
  
    it('should pass down the correct data to its child components', () => {
      //Assign
      component.messages = ['a','b','c'];
      
      //Act
      componentFixture.detectChanges();

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('.row'));
      for (let i = 0; i < component.messages.length; i++) {
          expect(elements[i].nativeElement.innerText).toEqual(component.messages[i]);
      }
      
      // Do not loop over the elements
      // for (let i = 0; i < elements.length; i++) {
      //   expect(elements[i].nativeElement.innerText).toEqual(component.messages[i]);
      // }
    });
  });

  describe('querySelectorAll', () => {
    it('should show the correct number of elements', () => {
      //Assign
      component.messages = ['a','b','c'];
      
      //Act
      componentFixture.detectChanges();

      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('.row');
      expect(elements.length).toEqual(3);
    });
  
    it('should pass down the correct data to its child components', () => {
      //Assign
      component.messages = ['a','b','c'];

      //Act
      componentFixture.detectChanges();

      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('.row');
      for (let i = 0; i < component.messages.length; i++) {
          expect(elements[i].innerText).toEqual(component.messages[i]);
      }
    });
  });
});
