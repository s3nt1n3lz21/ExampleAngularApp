import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing1Component } from './testing1.component';

describe('Testing Functions Are Called Using Spies', () => {
  let component: Testing1Component;
  let componentFixture: ComponentFixture<Testing1Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing1Component,
          ]
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing1Component);
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
    const spy = spyOn(component,'functionToBeCalled');

    //Act
    component.loadData();

    //Assert
    expect(spy).toHaveBeenCalledWith();
  });

  it('should not call a function during another function', () => {
    //Assign
    const spy = spyOn(component,'functionToBeCalled');

    //Act
    component.loadData();

    //Assert
    expect(spy).not.toHaveBeenCalledWith();
  });

  it('should call a function during another function', () => {
    //Assign
    spyOn(component,'functionToBeCalled');

    //Act
    component.loadData();

    //Assert
    expect(component.functionToBeCalled).toHaveBeenCalledWith();
  });

  it('should call a function during a private function', () => {
    //Assign
    const spy = spyOn(component,'functionToBeCalled');

    //Act
    component['_privateFunction']();

    //Assert
    expect(spy).toHaveBeenCalledWith();
  });

  it('should call a private function during another function', () => {
    //Assign
    spyOn<any>(component,'_privateFunction');

    //Act
    component.loadData();

    //Assert
    expect(component['_privateFunction']).toHaveBeenCalledWith();
  });
});
