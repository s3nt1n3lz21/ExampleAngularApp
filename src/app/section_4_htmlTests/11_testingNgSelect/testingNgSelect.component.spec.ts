import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingNgSelectComponent } from './testingNgSelect.component';

describe('Testing NgSelect', () => {
  let component: TestingNgSelectComponent;
  let componentFixture: ComponentFixture<TestingNgSelectComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingNgSelectComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingNgSelectComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  describe('query', () => {
    it('should call the function selectOption when the user selects a new value from the dropdown', () => {
      //Assign
      component.options = ['option 1','option 2','option 3'];
      component.option = 'option 1';
      componentFixture.detectChanges();
      const spy = spyOn(component, 'selectOption');
      const element = componentFixture.debugElement.query(By.css('#optionDropdown'));
  
      //Act
      triggerKeyDownEvent(element, 32); // space to open the dropdown
      triggerKeyDownEvent(element, 40); // down arrow
      triggerKeyDownEvent(element, 13); // enter to select second option and close the dropdown
      
      //Assert
      expect(spy).toHaveBeenCalledWith('option 2');
    });
  
    it('should update the field option when the user selects a new value from the dropdown', () => {
      //Assign
      component.options = ['option 1','option 2','option 3'];
      component.option = 'option 1';
      componentFixture.detectChanges();
      const element = componentFixture.debugElement.query(By.css('#optionDropdown'));
      
      //Act
      triggerKeyDownEvent(element, 32); // space to open the dropdown
      triggerKeyDownEvent(element, 40); // down arrow
      triggerKeyDownEvent(element, 13); // enter to select second option and close the dropdown
  
      //Assert
      expect(component.option).toEqual('option 2');
    });
  })

  describe('queryAll', () => {
    it('should call the function selectOption when the user selects a new value from the dropdown', () => {
      //Assign
      component.options = ['option 1','option 2','option 3'];
      component.option = 'option 1';
      componentFixture.detectChanges();
      const spy = spyOn(component, 'selectOption');
      const elements = componentFixture.debugElement.queryAll(By.css('#optionDropdown'));
  
      //Act
      triggerKeyDownEvent(elements[0], 32); // space to open the dropdown
      triggerKeyDownEvent(elements[0], 40); // down arrow
      triggerKeyDownEvent(elements[0], 13); // enter to select second option and close the dropdown
      
      //Assert
      expect(spy).toHaveBeenCalledWith('option 2');
    });
  
    it('should update the field option when the user selects a new value from the dropdown', () => {
      //Assign
      component.options = ['option 1','option 2','option 3'];
      component.option = 'option 1';
      componentFixture.detectChanges();
      const elements = componentFixture.debugElement.queryAll(By.css('#optionDropdown'));
      
      //Act
      triggerKeyDownEvent(elements[0], 32); // space to open the dropdown
      triggerKeyDownEvent(elements[0], 40); // down arrow
      triggerKeyDownEvent(elements[0], 13); // enter to select second option and close the dropdown
  
      //Assert
      expect(component.option).toEqual('option 2');
    });
  })

  function triggerKeyDownEvent(element: DebugElement, which: number, key = ''): void {
    element.triggerEventHandler('keydown', {
        which: which,
        key: key,
        preventDefault: () => { },
    });
  }
});
