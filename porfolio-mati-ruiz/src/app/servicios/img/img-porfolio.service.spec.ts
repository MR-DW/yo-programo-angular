import { TestBed } from '@angular/core/testing';

import { ImgPorfolioService } from './img-porfolio.service';

describe('ImgPorfolioService', () => {
  let service: ImgPorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgPorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
