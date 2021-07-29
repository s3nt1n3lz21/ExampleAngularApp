import { ChangeDetectorRef } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing14Component } from './testing14.component';

describe('Testing The Change Detector In The Constructor', () => {
  let component: Testing14Component;
  let componentFixture: ComponentFixture<Testing14Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing14Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Testing14Component);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign

    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should detach from the change detector on construction', () => {
    //Assign
    // const changeDetector = TestBed.inject(ChangeDetectorRef); // Won't work
    
    // This won't work either as we create a new component
    // const changeDetector = component['changeDetector'];
    // const detectChangesSpy = spyOn(changeDetector, 'detectChanges');

    // This won't work either
    // const detectChangesSpy = spyOn(ChangeDetectorRef.prototype, 'detach');

    const changeDetector = componentFixture.debugElement.injector.get(ChangeDetectorRef);
    const detectChangesSpy = spyOn(changeDetector.constructor.prototype, 'detach');

    //Act
    TestBed.createComponent(Testing14Component);

    //Assert
    expect(detectChangesSpy).toHaveBeenCalledWith();
  });
});
