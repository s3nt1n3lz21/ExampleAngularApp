import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingFunctionResultsComponent } from './testingFunctionResults.component';

describe('Testing Function Results', () => {
  let component: TestingFunctionResultsComponent;
  let componentFixture: ComponentFixture<TestingFunctionResultsComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingFunctionResultsComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingFunctionResultsComponent);
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
