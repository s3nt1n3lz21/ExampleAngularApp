import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingAsynchronousCodeComponent } from './testingAsynchronousCode.component';

describe('Testing Delayed Observables', () => {
  let component: TestingAsynchronousCodeComponent;
  let componentFixture: ComponentFixture<TestingAsynchronousCodeComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingAsynchronousCodeComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingAsynchronousCodeComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      //Assign

      //Act

      //Assert
      expect(component).toBeTruthy();
  });

  it('should wait and then get the first page', fakeAsync(() => {
      //Assign
      const spy = spyOn(component,'getFirstPage');

      //Act
      component.waitAndGetFirstPage();
      tick(300);

      //Assert
      expect(spy).toHaveBeenCalledWith();
  }));

  it('should get the first page when the user stops typing into the search box', fakeAsync(() => {
      //Assign
      const spy = spyOn(component,'getFirstPage');
      const subject = new BehaviorSubject<string>('');
      spyOn(component,'getSearchValue').and.returnValue(subject.asObservable());
  
      //Act
      component.waitForInputToStopChanging();
      subject.next('abc');
      tick(500);

      //Assert
      expect(spy).toHaveBeenCalledWith();
  }));
});
