import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../services/api.service';
import { Testing6Component } from './testing6.component';

describe('Testing Child Component Outputs', () => {
  let component: Testing6Component;
  let componentFixture: ComponentFixture<Testing6Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing6Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing6Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should handle the data when getting the data', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);
    spyOn(component,'handleData');
    const actionSubject = new BehaviorSubject<number>(null);
    spyOn(apiService,'getData').and.returnValue(actionSubject.asObservable());

    //Act
    component.getData(true);
    actionSubject.next(7);

    //Assert
    expect(component.handleData).toHaveBeenCalledWith(7);
  });

  it('should handle the data when getting the other data', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);
    spyOn(component,'handleData');
    const actionSubject = new BehaviorSubject<number>(null);
    spyOn(apiService,'getOtherData').and.returnValue(actionSubject.asObservable());

    //Act
    component.getData(false);
    actionSubject.next(9);

    //Assert
    expect(component.handleData).toHaveBeenCalledWith(9);
  })
});
