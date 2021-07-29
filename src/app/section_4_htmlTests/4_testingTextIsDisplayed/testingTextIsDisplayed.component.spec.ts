import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingTextIsDisplayedComponent } from './testingTextIsDisplayed.component';

describe('Testing Text Is Displayed', () => {
  let component: TestingTextIsDisplayedComponent;
  let componentFixture: ComponentFixture<TestingTextIsDisplayedComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingTextIsDisplayedComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingTextIsDisplayedComponent);
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
