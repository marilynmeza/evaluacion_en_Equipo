import { TestBed } from '@angular/core/testing';

import { CompartirVarService } from './compartir-var.service';

describe('CompartirVarService', () => {
  let service: CompartirVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
