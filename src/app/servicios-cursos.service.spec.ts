import { TestBed } from '@angular/core/testing';

import { ServiciosCursosService } from './servicios-cursos.service';

describe('ServiciosCursosService', () => {
  let service: ServiciosCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
