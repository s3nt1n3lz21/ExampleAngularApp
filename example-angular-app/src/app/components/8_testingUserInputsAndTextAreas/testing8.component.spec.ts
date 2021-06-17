import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestingModule } from 'src/app/testing-utils';
import { Testing8Component } from './testing8.component';

describe('Testing User Inputs And Text Areas', () => {
  let component: Testing8Component;
  let componentFixture: ComponentFixture<Testing8Component>;

  beforeEach(async(() => {
      configureTestingModule({
          declarations: [
            Testing8Component
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(Testing8Component);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should update the field title when the user types a new value into the input', () => {
    component.title = 'old title';
    const element = componentFixture.debugElement.query(By.css('#title')).nativeElement;
    console.log('element: ', element);

    element.value = 'new title';
    element.dispatchEvent(new Event('input'));
    
    expect(component.title).toEqual('new title');
  });
});
