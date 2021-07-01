import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing10Component } from './testing10.component';

describe('Testing Delayed Observables', () => {
  let component: Testing10Component;
  let componentFixture: ComponentFixture<Testing10Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing10Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing10Component);
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

    //Act
    component.setData();

    //Assert
    expect(spy).toHaveBeenCalledWith('data', 'value');
  });

  it('should load data from local storage', () => {
    //Assign
    const data = "value";
    const spy = spyOn(Storage.prototype, 'getItem').and.returnValue(JSON.stringify(data));

    //Act
    component.loadData();

    //Assert
    expect(spy).toHaveBeenCalledWith("data");
  })
});
