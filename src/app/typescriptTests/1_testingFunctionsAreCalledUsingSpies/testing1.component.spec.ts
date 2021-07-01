import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing1Component } from './testing1.component';

describe('Testing Components Are Displayed', () => {
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
});
