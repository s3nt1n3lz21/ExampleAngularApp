import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing3Component } from './testing3.component';

describe('Testing NgIfs', () => {
  let component: Testing3Component;
  let componentFixture: ComponentFixture<Testing3Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing3Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing3Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should show the title when showTitle is true', () => {
    component.showTitle = true;

    componentFixture.detectChanges();

    const element = componentFixture.debugElement.query(By.css('#title'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitle is false', () => {
    component.showTitle = false;

    componentFixture.detectChanges();

    const element = componentFixture.debugElement.query(By.css('#title'));
    expect(element).toBeFalsy();
  });

  it('should show the title when showTitle is true', () => {
    spyOn(component,'showTitleFunction').and.returnValue(true);
    
    componentFixture.detectChanges();
    
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeTruthy();
  });

  it('shouldnt show the title when showTitle is false', () => {
    spyOn(component,'showTitleFunction').and.returnValue(false);
    
    componentFixture.detectChanges();
    
    const element = componentFixture.debugElement.query(By.css('#title2'));
    expect(element).toBeFalsy();
  });
});
