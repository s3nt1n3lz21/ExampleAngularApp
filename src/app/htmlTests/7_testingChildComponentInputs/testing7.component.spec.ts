import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing7Component } from './testing7.component';

describe('Testing Child Component Inputs', () => {
  let component: Testing7Component;
  let componentFixture: ComponentFixture<Testing7Component>;

  beforeEach(async(() => {
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
    it('should pass down the correct data to its child component', () => {
      //Assign
      component.title = "title";
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title')).componentInstance;
      expect(element.inputData).toEqual(component.title);
    });
  })

  describe('queryAll', () => {
    it('should pass down the correct data to its child component', () => {
      //Assign
      component.title = "title";
      
      //Act
      componentFixture.detectChanges();
  
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0].componentInstance.inputData).toEqual(component.title);
    });
  })
});
