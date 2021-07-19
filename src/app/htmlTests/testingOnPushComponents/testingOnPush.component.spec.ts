import { ChangeDetectionStrategy } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingOnPushComponent } from './testingOnPush.component';

describe('Testing Components Are Displayed', () => {
  let component: TestingOnPushComponent;
  let componentFixture: ComponentFixture<TestingOnPushComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingOnPushComponent,
          ]
      })
      .overrideComponent(TestingOnPushComponent, {
        set: {
            changeDetection: ChangeDetectionStrategy.Default
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingOnPushComponent);
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
