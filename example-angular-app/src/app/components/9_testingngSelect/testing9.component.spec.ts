import { DebugElement } from '@angular/core';
import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing9Component } from './testing9.component';

describe('Testing NgSelect', () => {
  let component: Testing9Component;
  let componentFixture: ComponentFixture<Testing9Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing9Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing9Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should call the function selectOption when the user selects a new value from the dropdown', () => {
    component.options = ['option 1','option 2','option 3'];
    component.option = 'option 1';
    componentFixture.detectChanges();
    const spy = spyOn(component, 'selectOption');
    const element = componentFixture.debugElement.query(By.css('#optionDropdown'));

    triggerKeyDownEvent(element, 32); // space to open the dropdown
    triggerKeyDownEvent(element, 40); // down arrow
    triggerKeyDownEvent(element, 13); // enter to select second option and close the dropdown
    
    expect(spy).toHaveBeenCalledWith('option 2');
  });

  it('should update the field option when the user selects a new value from the dropdown', () => {
    component.options = ['option 1','option 2','option 3'];
    component.option = 'option 1';
    componentFixture.detectChanges();
    const element = componentFixture.debugElement.query(By.css('#optionDropdown'));
    
    triggerKeyDownEvent(element, 32); // space to open the dropdown
    triggerKeyDownEvent(element, 40); // down arrow
    triggerKeyDownEvent(element, 13); // enter to select second option and close the dropdown

    expect(component.option).toEqual('option 2');
  });

  function triggerKeyDownEvent(element: DebugElement, which: number, key = ''): void {
    element.triggerEventHandler('keydown', {
        which: which,
        key: key,
        preventDefault: () => { },
    });
  }
});
