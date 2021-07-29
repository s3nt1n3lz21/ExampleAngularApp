import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingNgIfsComponent } from './testingNgIfs.component';

describe('Testing NgIfs', () => {
  let component: TestingNgIfsComponent;
  let componentFixture: ComponentFixture<TestingNgIfsComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingNgIfsComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingNgIfsComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
    //Assign
    
    //Act

    //Assert
    expect(component).toBeTruthy();
  });

  it('should show the title when showTitle is true', () => {
    //Assign
    component.showTitle = true;

    //Act
    componentFixture.detectChanges();

    //Assert
    const element = componentFixture.debugElement.query(By.css('#title1'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitle is false', () => {
    //Assign
    component.showTitle = false;

    //Act
    componentFixture.detectChanges();

    //Assert
    const element = componentFixture.debugElement.query(By.css('#title1'));
    expect(element).toBeFalsy();
  });

  it('should show the title when showTitleFunction returns true', () => {
    //Assign
    spyOn(component,'showTitleFunction').and.returnValue(true);
    
    //Act
    componentFixture.detectChanges();
    
    //Assert
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitleFunction returns false', () => {
    //Assign
    spyOn(component,'showTitleFunction').and.returnValue(false);
    
    //Act
    componentFixture.detectChanges();
    
    //Assert
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeFalsy();
  });
});
