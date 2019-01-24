import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookmarkCategoryComponent } from './update-bookmark-category.component';

describe('UpdateBookmarkCategoryComponent', () => {
  let component: UpdateBookmarkCategoryComponent;
  let fixture: ComponentFixture<UpdateBookmarkCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookmarkCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookmarkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
