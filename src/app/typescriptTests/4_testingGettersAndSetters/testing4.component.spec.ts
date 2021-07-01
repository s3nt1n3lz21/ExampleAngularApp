import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing4Component } from './testing4.component';

describe('Testing Getters And Setters', () => {
  let component: Testing4Component;
  let componentFixture: ComponentFixture<Testing4Component>;

  beforeEach(waitForAsync(() => {
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
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should get the correct result when using the getter', () => {
    //Assign
    const expectedResult = 5;

    //Act
    const result = component.getData;

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should update the data when using the setter', () => {
    //Assign
    const data = 3;

    //Act
    component.setData = data;

    //Assert
    expect(component.data).toEqual(data);
  });
});
