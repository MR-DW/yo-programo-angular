import { TestBed } from '@angular/core/testing';

import { MisTrabajosJsonService } from './mis-trabajos.json.service';

describe('MisTrabajosJsonService', () => {
  let service: MisTrabajosJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisTrabajosJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
