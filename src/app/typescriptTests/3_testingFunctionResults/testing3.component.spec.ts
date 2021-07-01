import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing3Component } from './testing3.component';

describe('Testing Function Results', () => {
  let component: Testing3Component;
  let componentFixture: ComponentFixture<Testing3Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing3Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing3Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should produce the correct output for the given input', () => {
    //Assign
    const input = 5;
    const expectedResult = 10;

    //Act
    const result = component.double(input);

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
