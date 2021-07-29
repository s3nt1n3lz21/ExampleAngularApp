import { TestBed, waitForAsync } from '@angular/core/testing';

import { configureTestingModule } from 'src/app/testing-utils';
import { TestingServicesService } from './testingServices.service';

describe('NavService', () => {
    let service: TestingServicesService;

    beforeEach(waitForAsync(() => {
        configureTestingModule({
            providers: [TestingServicesService]
        });

        service = TestBed.inject(TestingServicesService);
    }));

    it('should be created', () => {
        //Assign

        //Act

        //Assert
        expect(service).toBeTruthy();
    });
});
