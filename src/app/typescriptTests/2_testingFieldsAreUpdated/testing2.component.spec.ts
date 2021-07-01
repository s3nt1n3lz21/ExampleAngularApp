import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing2Component } from './testing2.component';

describe('Testing Text Is Displayed', () => {
  let component: Testing2Component;
  let componentFixture: ComponentFixture<Testing2Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing2Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing2Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should update the count field when calling updateCount', () => {
    //Assign
    component.count = 5;
    const newCount = 10;

    //Act
    component.updateCount(newCount);

    //Assert
    expect(component.count).toEqual(newCount);
  });
});
