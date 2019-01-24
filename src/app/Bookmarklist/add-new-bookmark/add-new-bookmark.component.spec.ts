import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookmarkComponent } from './add-new-bookmark.component';

describe('AddNewBookmarkComponent', () => {
  let component: AddNewBookmarkComponent;
  let fixture: ComponentFixture<AddNewBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
