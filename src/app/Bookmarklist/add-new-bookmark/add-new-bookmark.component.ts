import { Component, OnInit } from '@angular/core';
import {BookmarkserviceService} from '../bookmarkservice.service'
import {BookmarkCategoryServiceService} from '../../BookmarkCategory/bookmark-category-service.service'
import {BookmarkCategorymodel} from '../../BookmarkCategory/bookmark-categorymodel'
import {BookmarkListModel} from '../bookmark-list-model'
import {Router} from '@angular/router'

@Component({
    selector: 'app-add-new-bookmark',
    templateUrl: './add-new-bookmark.component.html',
    styleUrls: ['./add-new-bookmark.component.css']
})
export class AddNewBookmarkComponent implements OnInit {

    bookmarkitem: any;
    IsBookmarkCreated: any;
    BookmarkCategories: BookmarkCategorymodel[];
    IsActive: any = true;

    constructor(private service: BookmarkserviceService, private _router: Router, private categoryService: BookmarkCategoryServiceService) {

        this.categoryService.getAllCategories().subscribe(

            categories => {
                this.BookmarkCategories = categories;
            }
        );
    }

    ngOnInit() {

        this.bookmarkitem = {};
        console.log(this.BookmarkCategories);
    }

    AddNewBookmarkItem(formCollection) {

        console.log(formCollection);

        this.bookmarkitem.Listname = formCollection.target[0].value;
        this.bookmarkitem.Link = formCollection.target[1].value;
        this.bookmarkitem.CategoryId = formCollection.target[2].value;
        this.bookmarkitem.IsActive = formCollection.target[3].value;

        console.log(this.bookmarkitem);

        this.service.AddNewBookmarkItem(this.bookmarkitem).subscribe(

            data => {

                this.IsBookmarkCreated = data;
                this._router.navigate(["/bookmarklist"]);
            }
        );
    }
}
