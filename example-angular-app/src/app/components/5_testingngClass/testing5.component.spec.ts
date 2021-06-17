import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing5Component } from './testing5.component';

describe('Testing NgClass', () => {
  let component: Testing5Component;
  let componentFixture: ComponentFixture<Testing5Component>;

  beforeEach(async(() => {
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
      expect(component).toBeTruthy();
  });

  // it('should display the welcome back text', () => {
  //   const element = componentFixture.debugElement.query(By.css('#someId'));
  //   expect(element.nativeElement.innerText.trim()).toEqual('Welcome back!');
  // });
});
