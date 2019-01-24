import { Component, OnInit } from '@angular/core';
import {BookmarkCategoryServiceService} from '../bookmark-category-service.service'
import {BookmarkCategorymodel} from '../bookmark-categorymodel'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-new-bookmark-category',
  templateUrl: './add-new-bookmark-category.component.html',
  styleUrls: ['./add-new-bookmark-category.component.css']
})
export class AddNewBookmarkCategoryComponent implements OnInit {

    category: any;
    IsCategoryCreated: any;
    Category: any;

    constructor(private categoryService: BookmarkCategoryServiceService, private _router: Router) { }

    ngOnInit() {
        this.category = {};
  }
    AddNewCategory(formCollection) {

        console.log(formCollection);

        this.category.Category = formCollection.Category;

        console.log(this.category);

        this.categoryService.AddNewCategory(this.category).subscribe(

            data => {

                this.IsCategoryCreated = data;
                this._router.navigate(["/bookmarkcategories"]);
            }
        );
    }
}
