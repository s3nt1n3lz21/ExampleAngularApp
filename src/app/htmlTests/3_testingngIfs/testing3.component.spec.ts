import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing3Component } from './testing3.component';

describe('Testing NgIfs', () => {
  let component: Testing3Component;
  let componentFixture: ComponentFixture<Testing3Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing3Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing3Component);
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
    const element = componentFixture.debugElement.query(By.css('#title'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitle is false', () => {
    //Assign
    component.showTitle = false;

    //Act
    componentFixture.detectChanges();

    //Assert
    const element = componentFixture.debugElement.query(By.css('#title'));
    expect(element).toBeFalsy();
  });

  it('should show the title when showTitle is true', () => {
    //Assign
    spyOn(component,'showTitleFunction').and.returnValue(true);
    
    //Act
    componentFixture.detectChanges();
    
    //Assert
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitle is false', () => {
    //Assign
    spyOn(component,'showTitleFunction').and.returnValue(false);
    
    //Act
    componentFixture.detectChanges();
    
    //Assert
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeFalsy();
  });
});
