import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing6Component } from './testing6.component';

describe('Testing Child Component Outputs', () => {
  let component: Testing6Component;
  let componentFixture: ComponentFixture<Testing6Component>;

  beforeEach(async(() => {
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
      expect(component).toBeTruthy();
  });

  // it('should display the welcome back text', () => {
  //   const element = componentFixture.debugElement.query(By.css('#someId'));
  //   expect(element.nativeElement.innerText.trim()).toEqual('Welcome back!');
  // });
});
