import { TestBed, inject } from '@angular/core/testing';

import { BookmarkCategoryServiceService } from './bookmark-category-service.service';

describe('BookmarkCategoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarkCategoryServiceService]
    });
  });

  it('should be created', inject([BookmarkCategoryServiceService], (service: BookmarkCategoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
