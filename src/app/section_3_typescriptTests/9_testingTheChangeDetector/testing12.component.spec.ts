import { ChangeDetectorRef } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing12Component } from './testing12.component';

describe('Testing The Change Detector', () => {
  let component: Testing12Component;
  let componentFixture: ComponentFixture<Testing12Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing12Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing12Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign

    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should update the UI after loading the data', () => {
    //Assign
    // const changeDetector = TestBed.inject(ChangeDetectorRef); // Won't work
    
    const changeDetector = component['changeDetector'];
    const detectChangesSpy = spyOn(changeDetector, 'detectChanges');

    // This also works, but avoid using prototype if you don't need to
    // const changeDetector = componentFixture.debugElement.injector.get(ChangeDetectorRef);
    // const detectChangesSpy = spyOn(changeDetector.constructor.prototype, 'detectChanges');

    //Act
    component.ngOnInit();

    //Assert
    expect(detectChangesSpy).toHaveBeenCalledWith();
  });
});
