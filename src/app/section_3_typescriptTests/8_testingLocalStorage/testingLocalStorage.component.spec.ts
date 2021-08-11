import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingLocalStorageComponent } from './testingLocalStorage.component';

describe('Testing Local Storage', () => {
  let component: TestingLocalStorageComponent;
  let componentFixture: ComponentFixture<TestingLocalStorageComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingLocalStorageComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingLocalStorageComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      //Assign

      //Act

      //Assert
      expect(component).toBeTruthy();
  });

  it('should save data to local storage', () => {
    //Assign
    const spy = spyOn(Storage.prototype, 'setItem');
    // const spy = spyOn(localStorage, 'setItem'); //doesn't work in Firefox

    //Act
    component.setData();

    //Assert
    expect(spy).toHaveBeenCalledWith('data', 'value');
  });

  it('should load data from local storage', () => {
    //Assign
    const data = "value";
    const spy = spyOn(Storage.prototype, 'getItem').and.returnValue(JSON.stringify(data));
    // const spy = spyOn(localStorage, 'setItem').and.returnValue(JSON.stringify(data)); //doesn't work in Firefox

    //Act
    component.loadData();

    //Assert
    expect(spy).toHaveBeenCalledWith("data");
  })
});
