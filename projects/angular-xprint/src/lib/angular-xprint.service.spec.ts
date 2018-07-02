import { TestBed, inject } from '@angular/core/testing';

import { AngularXprintService } from './angular-xprint.service';

describe('AngularXprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularXprintService]
    });
  });

  it('should be created', inject([AngularXprintService], (service: AngularXprintService) => {
    expect(service).toBeTruthy();
  }));
});
