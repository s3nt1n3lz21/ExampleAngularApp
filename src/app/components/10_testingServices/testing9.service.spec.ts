import { TestBed, waitForAsync } from '@angular/core/testing';

import { configureTestingModule } from 'src/app/testing-utils';
import { Testing9Service } from './testing9.service';

describe('NavService', () => {
    let service: Testing9Service;

    beforeEach(waitForAsync(() => {
        configureTestingModule({
            providers: [Testing9Service]
        });

        service = TestBed.inject(Testing9Service);
    }));

    it('should be created', () => {
        //Assign

        //Act

        //Assert
        expect(service).toBeTruthy();
    });
});
