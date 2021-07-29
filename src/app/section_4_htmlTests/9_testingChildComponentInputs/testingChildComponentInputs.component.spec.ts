import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingChildComponentInputsComponent } from './testingChildComponentInputs.component';

describe('Testing Child Component Inputs', () => {
  let component: TestingChildComponentInputsComponent;
  let componentFixture: ComponentFixture<TestingChildComponentInputsComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingChildComponentInputsComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingChildComponentInputsComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      //Assign

      //Act

      //Assert
      expect(component).toBeTruthy();
  });

  describe('query', () => {
    it('should pass down the correct data to app-child-component', () => {
      //Assign
      component.title = "a title";
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element.componentInstance.inputData).toEqual(component.title);
    });

    it('should set the button to disabled when isDisabled is true', () => {
      //Assign
      component.isDisabled = true;
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const element = componentFixture.debugElement.query(By.css('#button'));
      expect(element.nativeElement.disabled).toEqual(component.isDisabled);
    });
  })

  describe('queryAll', () => {
    it('should pass down the correct data to app-child-component', () => {
      //Assign
      component.title = "a title";
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0].componentInstance.inputData).toEqual(component.title);
    });

    it('should set the button to disabled when isDisabled is true', () => {
      //Assign
      component.isDisabled = true;
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#button'));
      expect(elements[0].nativeElement.disabled).toEqual(component.isDisabled);
    });
  })

  describe('querySelector', () => {
    it('should set the button to disabled when isDisabled is true', () => {
      //Assign
      component.isDisabled = true;
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#button');
      expect(element.disabled).toEqual(component.isDisabled);
    });
  })

  describe('querySelectorAll', () => {
    it('should set the button to disabled when isDisabled is true', () => {
      //Assign
      component.isDisabled = true;
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#button');
      expect(elements[0].disabled).toEqual(component.isDisabled);
    });
  })
});
