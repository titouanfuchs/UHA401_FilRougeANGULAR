import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsServiceService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
