import { TestBed, waitForAsync } from '@angular/core/testing';

import { configureTestingModule } from 'src/app/testing-utils';
import { Testing10Service } from './testing10.service';

describe('NavService', () => {
    let service: Testing10Service;

    beforeEach(waitForAsync(() => {
        configureTestingModule({
            providers: [Testing10Service]
        });

        service = TestBed.inject(Testing10Service);
    }));

    it('should be created', () => {
        //Assign

        //Act

        //Assert
        expect(service).toBeTruthy();
    });
});
