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
      expect(component).toBeTruthy();
  });

  // it('should display the welcome back text', () => {
  //   const element = componentFixture.debugElement.query(By.css('#someId'));
  //   expect(element.nativeElement.innerText.trim()).toEqual('Welcome back!');
  // });
});
