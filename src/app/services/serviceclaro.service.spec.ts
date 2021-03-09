import { TestBed } from '@angular/core/testing';

import { ServiceclaroService } from './serviceclaro.service';

describe('ServiceclaroService', () => {
  let service: ServiceclaroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceclaroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
