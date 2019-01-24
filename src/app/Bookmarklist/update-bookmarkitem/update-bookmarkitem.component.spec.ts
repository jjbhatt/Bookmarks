import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookmarkitemComponent } from './update-bookmarkitem.component';

describe('UpdateBookmarkitemComponent', () => {
  let component: UpdateBookmarkitemComponent;
  let fixture: ComponentFixture<UpdateBookmarkitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookmarkitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookmarkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
