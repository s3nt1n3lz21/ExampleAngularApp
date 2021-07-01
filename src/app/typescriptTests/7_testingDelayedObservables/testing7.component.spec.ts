import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing7Component } from './testing7.component';

describe('Testing Delayed Observables', () => {
  let component: Testing7Component;
  let componentFixture: ComponentFixture<Testing7Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing7Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing7Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      //Assign

      //Act

      //Assert
      expect(component).toBeTruthy();
  });

  it('should get the first page when the user types into the search box', fakeAsync(() => {
      //Assign
      const spy = spyOn(component,'getFirstPage');
      const searchString = 'abc';

      //Act
      component['searchSubject'].next(searchString);
      tick(500);

      //Assert
      expect(spy).toHaveBeenCalledWith();
  }));

  it('should wait and then get the first page', fakeAsync(() => {
    //Assign
    const spy = spyOn(component,'getFirstPage');

    //Act
    component.waitAndGetFirstPage();
    tick(300);

    //Assert
    expect(spy).toHaveBeenCalledWith();
  }));
});
