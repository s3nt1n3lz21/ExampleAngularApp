import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../services/api.service';
import { Testing5Component } from './testing5.component';

describe('Testing NgClass', () => {
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
    const apiService = TestBed.inject(ApiService);
    const spy = spyOn(component,'handleData');

    //Act
    apiService['getDataSubject'].next(5);

    //Assert
    expect(spy).toHaveBeenCalledWith(5);
  });

  it('should set the data when reciving new data', () => {
    //Assign
    const apiService = TestBed.inject(ApiService);

    //Act
    apiService['getDataSubject'].next(5);

    //Assert
    expect(component.data).toEqual(5);
  });
});
