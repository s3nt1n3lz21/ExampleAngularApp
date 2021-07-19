import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing15Component } from './testing15.component';
import { is, List } from 'immutable';

describe('Testing The Change Detector In The Constructor', () => {
  let component: Testing15Component;
  let componentFixture: ComponentFixture<Testing15Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing15Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Testing15Component);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign

    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should set the data correctly', () => {
    //Assign
    component.data = List([]);
    const expectedData = List([1,2,3]);

    //Act
    component.setData(expectedData);

    //Assert
    // expect(component.data).toEqual(expectedData); // Won't work
    expect(is(component.data, expectedData)).toEqual(true);
  });
});
