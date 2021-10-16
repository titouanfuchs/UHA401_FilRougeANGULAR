import { TestBed } from '@angular/core/testing';

import { ApiTablesService } from './api-tables.service';

describe('ApiTablesService', () => {
  let service: ApiTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
