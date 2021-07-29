import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../../services/api.service';
import { TestingFunctionsAreCalledUsingSpiesComponent } from './testingFunctionsAreCalledUsingSpies.component';

describe('Testing Functions Are Called Using Spies', () => {
  let component: TestingFunctionsAreCalledUsingSpiesComponent;
  let componentFixture: ComponentFixture<TestingFunctionsAreCalledUsingSpiesComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingFunctionsAreCalledUsingSpiesComponent,
          ]
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingFunctionsAreCalledUsingSpiesComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should call a function during another function', () => {
    //Assign
    const spy = spyOn(component,'doSomething');

    //Act
    component.loadData();

    //Assert
    expect(spy).toHaveBeenCalledWith();
  });

  it('should not call a function during another function', () => {
    //Assign
    const spy = spyOn(component,'doSomething');

    //Act
    component.dontLoadData();

    //Assert
    expect(spy).not.toHaveBeenCalledWith();
  });

  it('should call a function during another function without spy variable', () => {
    //Assign
    spyOn(component,'doSomething');

    //Act
    component.loadData();

    //Assert
    expect(component.doSomething).toHaveBeenCalledWith();
  });

  it('should call a function during a private function', () => {
    //Assign
    const spy = spyOn(component,'insidePrivateFunction');

    //Act
    component['privateFunction']();

    //Assert
    expect(spy).toHaveBeenCalledWith();
  });

  it('should call a private function during another function', () => {
    //Assign
    spyOn<any>(component,'privateFunction');

    //Act
    component.callPrivateFunction();

    //Assert
    expect(component['privateFunction']).toHaveBeenCalledWith();
  });

  it('should call a function on a service', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);
    spyOn(apiService,'getData');

    //Act
    component.serviceFunctionCalled();

    //Assert
    expect(apiService.getData).toHaveBeenCalledWith();
  });

  it('should try loading data and be successful', () => {
    //Assign
    spyOn(component,'shouldLoadData').and.returnValue(true);
    spyOn(component,'loadData');

    //Act
    component.tryLoadData();

    //Assert
    expect(component.loadData).toHaveBeenCalledWith();
  });

  it('should try load data and be unsuccessful', () => {
    //Assign
    spyOn(component,'shouldLoadData').and.returnValue(false);
    spyOn(component,'dontLoadData');

    //Act
    component.tryLoadData();

    //Assert
    expect(component.dontLoadData).toHaveBeenCalledWith();
  });
});
