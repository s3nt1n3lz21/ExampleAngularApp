import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../services/api.service';
import { Testing5Component } from './testing5.component';

describe('Testing Subscriptions And Observables', () => {
  let component: Testing5Component;
  let componentFixture: ComponentFixture<Testing5Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing5Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing5Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should call handleData when recieving new data', () => {
    //Assign
    const spy = spyOn(component,'handleData');
    const apiService = TestBed.inject(ApiService);
    const getDataSubject = new BehaviorSubject<number>(3);
    spyOn(apiService,'getData').and.returnValue(getDataSubject.asObservable());

    //Act
    component.ngOnInit(); // Subscribe again since the function was just changed.
    getDataSubject.next(5); // Emit a new value

    //Assert
    expect(spy).toHaveBeenCalledWith(5);
  });

  it('should set the data when recieving new data', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);
    const subject = new BehaviorSubject<number>(3);
    spyOn(apiService,'getData').and.returnValue(subject.asObservable());

    //Act
    component.ngOnInit(); // Subscribe again
    subject.next(5); // Emit a new value

    //Assert
    expect(component.data).toEqual(5);
  });
});
