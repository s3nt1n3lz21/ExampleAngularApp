import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingGettersAndSettersComponent } from './testingGettersAndSetters.component';

describe('Testing Getters And Setters', () => {
  let component: TestingGettersAndSettersComponent;
  let componentFixture: ComponentFixture<TestingGettersAndSettersComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingGettersAndSettersComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingGettersAndSettersComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should get the correct result when using the getter', () => {
    //Assign
    component.data = 5;
    const expectedResult = 5;

    //Act
    const result = component.getData;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should update the data when using the setter', () => {
    //Assign
    component.data = 5;
    const data = 3;

    //Act
    component.setData = data;

    //Assert
    expect(component.data).toEqual(data);
  });
});
