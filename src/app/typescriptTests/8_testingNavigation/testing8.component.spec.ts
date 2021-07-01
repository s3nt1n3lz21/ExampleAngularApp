import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { configureTestingModule } from 'src/app/testing-utils';
import { AuthorisationService } from '../services/authorisation.service';
import { Testing8Component } from './testing8.component';

describe('Testing User Inputs And Text Areas', () => {
  let component: Testing8Component;
  let componentFixture: ComponentFixture<Testing8Component>;

  beforeEach(waitForAsync(() => {
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
      //Assign

      //Act

      //Assert
      expect(component).toBeTruthy();
  });

  it('should navigate to the home page if the user is logged in', fakeAsync(() => {
    //Assign
    const router = TestBed.inject(Router);
    const authorisationService = TestBed.inject(AuthorisationService);
    spyOn(authorisationService, 'canActivate').and.returnValue(true); // The user is allowed to navigate

    //Act
    router.navigate(['home']); // try navigating home

    //Assert
    tick(); // Wait until navigation is complete
    expect(router.url).toBe('/home');
  }));
});
