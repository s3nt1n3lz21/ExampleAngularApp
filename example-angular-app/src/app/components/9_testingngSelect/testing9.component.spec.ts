import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing9Component } from './testing9.component';

describe('Testing NgSelect', () => {
  let component: Testing9Component;
  let componentFixture: ComponentFixture<Testing9Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing9Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing9Component);
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
