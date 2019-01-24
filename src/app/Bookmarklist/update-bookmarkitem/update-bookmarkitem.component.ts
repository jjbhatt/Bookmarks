import { Component, OnInit } from '@angular/core';
import {BookmarkserviceService} from '../bookmarkservice.service'
import {BookmarkCategoryServiceService} from '../../BookmarkCategory/bookmark-category-service.service'
import {BookmarkCategorymodel} from '../../BookmarkCategory/bookmark-categorymodel'
import {BookmarkListModel} from '../bookmark-list-model'
import {Router, ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-update-bookmarkitem',
  templateUrl: './update-bookmarkitem.component.html',
  styleUrls: ['./update-bookmarkitem.component.css']
})
export class UpdateBookmarkitemComponent implements OnInit {

    BookmarkItem: any;
    IsBookmarkListItemUpdated: any;
    BookmarkCategories: any;
    selectedCategory: any;
    bookmarkname: any;
    bookmarklink: any;
    IsActive: any;
    CategoryId: any;

    constructor(private bookmarkService: BookmarkserviceService, private categoryService: BookmarkCategoryServiceService, private _router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        const id = this.activeRoute.snapshot.params["id"];
        this.RetrieveAndPopulateBookmarkItemById(id);
        this.categoryService.getAllCategories().subscribe(

            categories => {

                this.BookmarkCategories = categories;
            }
        );
  }
    RetrieveAndPopulateBookmarkItemById(id) {

        this.bookmarkService.getBookmarkItemByID(id).subscribe(
            bookmarkitems => {
                console.log(bookmarkitems);
                this.BookmarkItem = bookmarkitems;
                this.bookmarkname = this.BookmarkItem.ListName;
                this.bookmarklink = this.BookmarkItem.Link;
                this.CategoryId = this.BookmarkItem.CategoryId;
                this.IsActive = this.BookmarkItem.IsActive;
            }
        );
    }

    UpdateBookmarkItem(formCollection) {

        console.log(formCollection);

        this.BookmarkItem.ListId = this.activeRoute.snapshot.params["id"];
        this.BookmarkItem.ListName = formCollection.target[0].value;
        this.BookmarkItem.Link = formCollection.target[1].value;
        this.BookmarkItem.CategoryId = formCollection.target[2].value;
        this.BookmarkItem.IsActive = formCollection.target[3].value;

        console.log(this.BookmarkItem);

        this.bookmarkService.UpdateBookmarkItem(this.BookmarkItem.ListId, this.BookmarkItem).subscribe(

            data => {

                this.IsBookmarkListItemUpdated = data;
                this._router.navigate(["/bookmarklist"]);
            }
        );


    }
}
