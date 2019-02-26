import { TestBed, inject } from '@angular/core/testing';

import { FormGaurdService } from './form-gaurd.service';

describe('FormGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormGaurdService]
    });
  });

  it('should be created', inject([FormGaurdService], (service: FormGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
