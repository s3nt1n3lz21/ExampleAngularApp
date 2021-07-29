import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { TestingNgClassComponent } from './testingNgClass.component';

describe('Testing NgClass', () => {
  let component: TestingNgClassComponent;
  let componentFixture: ComponentFixture<TestingNgClassComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingNgClassComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingNgClassComponent);
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
    it('should apply the class active when activeTitle is true', () => {
      //Assign
      component.activeTitle = true;
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title1'));
      expect(element.nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title1'));
      expect(element.nativeElement.classList).not.toContain('active');
    });

    it('should apply the class active when activeTitleFunction returns true', () => {
      //Assign
      spyOn(component,'activeTitleFunction').and.returnValue(true);
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title2'));
      expect(element.nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitleFunction returns false', () => {
      //Assign  
      spyOn(component,'activeTitleFunction').and.returnValue(false);
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title2'));
      expect(element.nativeElement.classList).not.toContain('active');
    });
  })

  describe('queryAll', () => {
    it('should apply the class active when activeTitle is true', () => {
      //Assign
      component.activeTitle = true;
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title1'));
      expect(elements[0].nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title1'));
      expect(elements[0].nativeElement.classList).not.toContain('active');
    });

    it('should apply the class active when activeTitleFunction returns true', () => {
      //Assign
      spyOn(component,'activeTitleFunction').and.returnValue(true);
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title2'));
      expect(elements[0].nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitleFunction returns false', () => {
      //Assign  
      spyOn(component,'activeTitleFunction').and.returnValue(false);
        
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title2'));
      expect(elements[0].nativeElement.classList).not.toContain('active');
    });
  })

  describe('querySelector', () => {
    it('should apply the class active when activeTitle is true', () => {
      //Assign
      component.activeTitle = true;
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title1');
      expect(element.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title1');
      expect(element.classList).not.toContain('active');
    });

    it('should apply the class active when activeTitleFunction returns true', () => {
      //Assign
      spyOn(component,'activeTitleFunction').and.returnValue(true);
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title2');
      expect(element.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitleFunction returns false', () => {
      //Assign  
      spyOn(component,'activeTitleFunction').and.returnValue(false);
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title2');
      expect(element.classList).not.toContain('active');
    });
  })

  describe('querySelectorAll', () => {
    it('should apply the class active when activeTitle is true', () => {
      //Assign
      component.activeTitle = true;
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title1');
      expect(elements[0].classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title1');
      expect(elements[0].classList).not.toContain('active');
    });

    it('should apply the class active when activeTitleFunction returns true', () => {
      //Assign
      spyOn(component,'activeTitleFunction').and.returnValue(true);
      
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title2');
      expect(elements[0].classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitleFunction returns false', () => {
      //Assign  
      spyOn(component,'activeTitleFunction').and.returnValue(false);
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title2');
      expect(elements[0].classList).not.toContain('active');
    });
  })
});
