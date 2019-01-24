import { TestBed, inject } from '@angular/core/testing';

import { BookmarkserviceService } from './bookmarkservice.service';

describe('BookmarkserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarkserviceService]
    });
  });

  it('should be created', inject([BookmarkserviceService], (service: BookmarkserviceService) => {
    expect(service).toBeTruthy();
  }));
});
