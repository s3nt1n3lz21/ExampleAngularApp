import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { ChildComponent } from '../childComponent/child.component';
import { Testing1Component } from './testing1.component';
import { Testing1Module } from './testing1.component.module';

describe('Testing Components Are Displayed', () => {
  let component: Testing1Component;
  let componentFixture: ComponentFixture<Testing1Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing1Component,
          ]
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing1Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  describe('query', () => {
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.query(By.css('app-child-component'));
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.query(By.css('.title'));
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.query(By.css('#title'));
      expect(element).toBeTruthy();
    });
  })

  describe('queryAll', () => {
    it('should get the element by selector', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('app-child-component'));
      expect(elements[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('.title'));
      expect(elements[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const elements = componentFixture.debugElement.queryAll(By.css('#title'));
      expect(elements[0]).toBeTruthy();
    });
  })

  describe('querySelector', () => {
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('app-child-component');
      expect(element).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('.title');
      expect(element).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.nativeElement.querySelector('#title');
      expect(element).toBeTruthy();
    });
  })

  describe('querySelectorAll', () => {
    it('should get the element by selector', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('app-child-component');
      expect(element[0]).toBeTruthy();
    });

    it('should get the element by class', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('.title');
      expect(element[0]).toBeTruthy();
    });
  
    it('should get the element by id', () => {
      const element = componentFixture.debugElement.nativeElement.querySelectorAll('#title');
      expect(element[0]).toBeTruthy();
    });
  })
});
