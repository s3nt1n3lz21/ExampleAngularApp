import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingComponentsAreDisplayedComponent } from './testingComponentsAreDisplayed.component';

describe('Testing Components Are Displayed', () => {
  let component: TestingComponentsAreDisplayedComponent;
  let componentFixture: ComponentFixture<TestingComponentsAreDisplayedComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingComponentsAreDisplayedComponent,
          ]
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingComponentsAreDisplayedComponent);
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
    it('should get the element by selector', () => {
      //Assign

      //Act

      //Assert
      const element = componentFixture.debugElement.query(By.css('app-child-component'));
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      //Assign

      //Act

      //Assert
      const element = componentFixture.debugElement.query(By.css('.title'));
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      //Assign
      
      //Act

      //Assert
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element).toBeTruthy();
    });
  })

  describe('queryAll', () => {
    it('should get the element by selector', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('app-child-component'));
      expect(elements[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('.title'));
      expect(elements[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0]).toBeTruthy();
    });
  })

  describe('querySelector', () => {
    it('should get the element by selector', () => {
      //Assign

      //Act

      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('app-child-component');
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      //Assign

      //Act
      
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('.title');
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      //Assign

      //Act
      
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element).toBeTruthy();
    });
  })

  describe('querySelectorAll', () => {
    it('should get the element by selector', () => {
      //Assign

      //Act

      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('app-child-component');
      expect(elements[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      //Assign

      //Act
      
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('.title');
      expect(elements[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      //Assign

      //Act
      
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(elements[0]).toBeTruthy();
    });
  })
});
