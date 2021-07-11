import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing5Component } from './testing5.component';

describe('Testing NgClass', () => {
  let component: Testing5Component;
  let componentFixture: ComponentFixture<Testing5Component>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            Testing5Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing5Component);
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
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element.nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.query(By.css('#title'));
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
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0].nativeElement.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
      
      //Assert
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
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
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element.classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
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
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(elements[0].classList).toContain('active');
    });
    
    it('shouldnt apply the class active when activeTitle is false', () => {
      //Assign  
      component.activeTitle = false;
        
      //Act
      componentFixture.detectChanges();
        
      //Assert
      const elements = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(elements[0].classList).not.toContain('active');
    });
  })
});
