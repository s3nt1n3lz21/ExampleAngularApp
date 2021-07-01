import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing8Component } from './testing8.component';

describe('Testing User Inputs And Text Areas', () => {
  let component: Testing8Component;
  let componentFixture: ComponentFixture<Testing8Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing8Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing8Component);
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
    it('should update the field title when the user types a new value into the input', () => {
      //Assign
      component.title = 'old title';
      const element = componentFixture.debugElement.query(By.css('#title')).nativeElement;
  
      //Act
      element.value = 'new title';
      element.dispatchEvent(new Event('input'));
      
      //Assert
      expect(component.title).toEqual('new title');
    });
  })

  describe('queryAll', () => {
    it('should update the field title when the user types a new value into the input', () => {
      //Assign
      component.title = 'old title';
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
  
      //Act
      elements[0].nativeElement.value = 'new title';
      elements[0].nativeElement.dispatchEvent(new Event('input'));
      
      //Assert
      expect(component.title).toEqual('new title');
    });
  })

  describe('querySelector', () => {
    it('should update the field title when the user types a new value into the input', () => {
      //Assign
      component.title = 'old title';
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
  
      //Act
      element.value = 'new title';
      element.dispatchEvent(new Event('input'));
      
      //Assert
      expect(component.title).toEqual('new title');
    });
  })

  describe('querySelectorAll', () => {
    it('should update the field title when the user types a new value into the input', () => {
      //Assign
      component.title = 'old title';
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
  
      //Act
      elements[0].value = 'new title';
      elements[0].dispatchEvent(new Event('input'));
      
      //Assert
      expect(component.title).toEqual('new title');
    });
  })
});
