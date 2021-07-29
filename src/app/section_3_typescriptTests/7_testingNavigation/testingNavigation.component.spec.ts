import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { configureTestingModule } from 'src/app/testing-utils';
import { AuthorisationService } from '../../services/authorisation.service';
import { TestingNavigationComponent } from './testingNavigation.component';

describe('Testing Navigation', () => {
  let component: TestingNavigationComponent;
  let componentFixture: ComponentFixture<TestingNavigationComponent>;

  beforeEach(waitForAsync(() => {
      configureTestingModule({
          declarations: [
            TestingNavigationComponent
          ],
      }).compileComponents();
  }));

  beforeEach(() => {
      componentFixture = TestBed.createComponent(TestingNavigationComponent);
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
    tick(); // Skip ahead to when navigation is complete

    //Assert
    expect(router.url).toBe('/home');
  }));

  it('shouldnt navigate to the home page if the user is not logged in', fakeAsync(() => {
    //Assign
    const router = TestBed.inject(Router);
    const authorisationService = TestBed.inject(AuthorisationService);
    spyOn(authorisationService, 'canActivate').and.returnValue(false); // The user is not allowed to navigate

    //Act
    router.navigate(['home']); // try navigating home
    tick(); // Skip ahead to when navigation is complete

    //Assert
    expect(router.url).not.toBe('/home');
  }));
});
