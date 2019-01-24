import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCategoriesComponent } from './bookmark-categories.component';

describe('BookmarkCategoriesComponent', () => {
  let component: BookmarkCategoriesComponent;
  let fixture: ComponentFixture<BookmarkCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
