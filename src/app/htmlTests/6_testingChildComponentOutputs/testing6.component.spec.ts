import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing6Component } from './testing6.component';

describe('Testing Child Component Outputs', () => {
  let component: Testing6Component;
  let componentFixture: ComponentFixture<Testing6Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing6Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing6Component);
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
    it('should call the correct function on child component output event', () => {
      //Assign
      const spy = spyOn(component,'updateData');
      const event = new Event('outputData');

      //Act
      const element = componentFixture.debugElement.query(By.css('#title'));
      element.nativeElement.dispatchEvent(event);
  
      //Assert
      expect(spy).toHaveBeenCalledWith(event);
    });
  })

  describe('queryAll', () => {
    it('should call the correct function on child component output event', () => {
      //Assign
      const spy = spyOn(component,'updateData');
      const event = new Event('outputData');

      //Act
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      elements[0].nativeElement.dispatchEvent(event);
  
      //Assert
      expect(spy).toHaveBeenCalledWith(event);
    });
  })

  describe('querySelector', () => {
    it('should call the correct function on child component output event', () => {
      //Assign
      const spy = spyOn(component,'updateData');
      const event = new Event('outputData');

      //Act
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      element.dispatchEvent(event);
  
      //Assert
      expect(spy).toHaveBeenCalledWith(event);
    });
  })

  describe('querySelectorAll', () => {
    it('should call the correct function on child component output event', () => {
      //Assign
      const spy = spyOn(component,'updateData');
      const event = new Event('outputData');

      //Act
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      elements[0].dispatchEvent(event);
  
      //Assert
      expect(spy).toHaveBeenCalledWith(event);
    });
  })
});
