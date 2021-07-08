import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing7Component } from './testing7.component';

describe('Testing Child Component Inputs', () => {
  let component: Testing7Component;
  let componentFixture: ComponentFixture<Testing7Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing7Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing7Component);
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
