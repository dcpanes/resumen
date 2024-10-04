import { TestBed } from '@angular/core/testing';

import { ManejoEstadoService } from './manejo-estado.service';

describe('ManejoEstadoService', () => {
  let service: ManejoEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
