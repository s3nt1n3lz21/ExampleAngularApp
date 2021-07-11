import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { ApiService } from '../services/api.service';
import { Testing13Component } from './testing13.component';

describe('Testing Functions In The Constructor', () => {
  let component: Testing13Component;
  let componentFixture: ComponentFixture<Testing13Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing13Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Testing13Component);
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
