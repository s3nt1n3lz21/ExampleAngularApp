import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingFieldsAreUpdatedComponent } from './testingFieldsAreUpdated.component';

describe('Testing Fields Are Updated', () => {
  let component: TestingFieldsAreUpdatedComponent;
  let componentFixture: ComponentFixture<TestingFieldsAreUpdatedComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingFieldsAreUpdatedComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingFieldsAreUpdatedComponent);
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
