import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
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

  it('should call the function selectOption when the user selects a new value from the dropdown', fakeAsync(() => {
    componentFixture.detectChanges();
    const spy = spyOn(component, 'selectOption');
    
    const element = componentFixture.debugElement.query(By.css('#optionDropdown'));
    triggerKeyDownEvent(element, 32); // space to open the ng select
    componentFixture.detectChanges(); // update the UI
    tick(); // wait for the dropdown to open
    triggerKeyDownEvent(element, 40); // down arrow
    triggerKeyDownEvent(element, 13); // enter to select and close the dropdown
    
    flush(); // wait for the dropdown to close
    expect(spy).toHaveBeenCalledWith(jasmine.any(Object));
}));

  function triggerKeyDownEvent(element: DebugElement, which: number, key = ''): void {
    element.triggerEventHandler('keydown', {
        which: which,
        key: key,
        preventDefault: () => { },
    });
}
});
