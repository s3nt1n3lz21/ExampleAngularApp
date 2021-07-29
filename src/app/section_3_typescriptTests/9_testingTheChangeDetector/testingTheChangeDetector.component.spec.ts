import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingTheChangeDetectorComponent } from './testingTheChangeDetector.component';

describe('Testing The Change Detector', () => {
  let component: TestingTheChangeDetectorComponent;
  let componentFixture: ComponentFixture<TestingTheChangeDetectorComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingTheChangeDetectorComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingTheChangeDetectorComponent);
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
