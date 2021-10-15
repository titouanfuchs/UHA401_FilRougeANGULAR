import { TestBed } from '@angular/core/testing';

import { AdminModalManagerService } from './admin-modal-manager.service';

describe('AdminModalManagerService', () => {
  let service: AdminModalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminModalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
