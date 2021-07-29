import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing2Component } from './testing2.component';

describe('Testing Text Is Displayed', () => {
  let component: Testing2Component;
  let componentFixture: ComponentFixture<Testing2Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing2Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing2Component);
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
    it('should display the welcome back text', () => {
      //Assign

      //Act

      //Assert
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element.nativeElement.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('queryAll', () => {
    it('should display the welcome back text', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0].nativeElement.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('querySelector', () => {
    it('should display the welcome back text', () => {
      //Assign

      //Act
      
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element.innerText.trim()).toEqual('Welcome Back!');
    });
  })

  describe('querySelectorAll', () => {
    it('should display the welcome back text', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(elements[0].innerText.trim()).toEqual('Welcome Back!');
    });
  })
});
