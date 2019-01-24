import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookmarkCategoryComponent } from './add-new-bookmark-category.component';

describe('AddNewBookmarkCategoryComponent', () => {
  let component: AddNewBookmarkCategoryComponent;
  let fixture: ComponentFixture<AddNewBookmarkCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBookmarkCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookmarkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
