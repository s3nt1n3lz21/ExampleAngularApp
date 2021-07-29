import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../../services/api.service';
import { TestingFunctionsInTheConstructorComponent } from './testingFunctionsInTheConstructor.component';

describe('Testing Functions In The Constructor', () => {
  let component: TestingFunctionsInTheConstructorComponent;
  let componentFixture: ComponentFixture<TestingFunctionsInTheConstructorComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingFunctionsInTheConstructorComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(TestingFunctionsInTheConstructorComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign

    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should get the data from the api on construction', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);
    spyOn(apiService,'getData');

    //Act
    TestBed.createComponent(Testing13Component);

    //Assert
    expect(apiService.getData).toHaveBeenCalledWith();
  });
});
