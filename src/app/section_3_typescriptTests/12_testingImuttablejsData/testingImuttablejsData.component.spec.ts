import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingImuttablejsDataComponent } from './testingImuttablejsData.component';
import { is, List } from 'immutable';

describe('Testing Immutable.js Data', () => {
  let component: TestingImuttablejsDataComponent;
  let componentFixture: ComponentFixture<TestingImuttablejsDataComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingImuttablejsDataComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(TestingImuttablejsDataComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign

    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should set the data correctly', () => {
    //Assign
    component.data = List([]);
    const expectedData = List([1,2,3]);

    //Act
    component.setData(expectedData);

    //Assert
    // expect(component.data).toEqual(expectedData); // Won't work
    expect(is(component.data, expectedData)).toEqual(true);
  });
});
