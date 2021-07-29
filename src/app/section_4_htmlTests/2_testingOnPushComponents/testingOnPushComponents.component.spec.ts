import { ChangeDetectionStrategy } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingOnPushComponentsComponent } from './testingOnPushComponents.component';

describe('Testing On Push Components', () => {
  let component: TestingOnPushComponentsComponent;
  let componentFixture: ComponentFixture<TestingOnPushComponentsComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingOnPushComponentsComponent,
          ]
      })
      .overrideComponent(TestingOnPushComponentsComponent, {
        set: {
            changeDetection: ChangeDetectionStrategy.Default
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingOnPushComponentsComponent);
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
