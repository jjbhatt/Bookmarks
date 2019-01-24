import { Component, OnInit } from '@angular/core';
import {BookmarkCategoryServiceService} from '../bookmark-category-service.service'
import {BookmarkCategorymodel} from '../bookmark-categorymodel'
import {Router, ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-update-bookmark-category',
  templateUrl: './update-bookmark-category.component.html',
  styleUrls: ['./update-bookmark-category.component.css']
})
export class UpdateBookmarkCategoryComponent implements OnInit {

    category: any;
    IsCategoryUpdated: any;
    Category: any;

    constructor(private categoryService: BookmarkCategoryServiceService, private _router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        const id = this.activeRoute.snapshot.params["id"];
        this.RetrieveAndPopulateCategoryById(id);
  }

    RetrieveAndPopulateCategoryById(id) {

        this.categoryService.getCategoryByID(id).subscribe(
            categories => {
                console.log(categories);
                this.category = categories;
                this.Category = this.category.Category;
            }
        );
    }

    UpdateCategory(formCollection) {

        console.log(formCollection);

        this.category.CategoryId = this.activeRoute.snapshot.params["id"];
        this.category.Category = formCollection.Category;

        console.log(this.category);

        this.categoryService.UpdateCategory(this.category.CategoryId, this.category).subscribe(

            data => {

                this.IsCategoryUpdated = data;
                this._router.navigate(["/bookmarkcategories"]);
            }
        );


    }
}
