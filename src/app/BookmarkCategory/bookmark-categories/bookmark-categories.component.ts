import { Component, OnInit } from '@angular/core';
import {BookmarkCategoryServiceService} from '../bookmark-category-service.service'
import {BookmarkCategorymodel} from '../bookmark-categorymodel'
import {Router} from '@angular/router'
import {ExcelServiceService} from '../../excel-service.service';

@Component({
    selector: 'app-bookmark-categories',
    templateUrl: './bookmark-categories.component.html',
    styleUrls: ['./bookmark-categories.component.css']
})
export class BookmarkCategoriesComponent implements OnInit {

    bookmarkCategories: BookmarkCategorymodel[];
    IsBookmarkCategoryDeleted: any;
    display = 'none'; //default Variable --- for Dialog
    bookmarkCategoryIdToDelete: any;


    constructor(private categoryService: BookmarkCategoryServiceService, private _router: Router, private excelService: ExcelServiceService) { }

    ngOnInit() {

        this.getAllBookmarkCategories();
    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.bookmarkCategories, 'BookmarkCategories');
    }
    getAllBookmarkCategories() {

        this.categoryService.getAllCategories().subscribe(

            categories => {
                this.bookmarkCategories = categories;
            }
        );
    }

    showBookmarkcategoryDetail(id) {

        this._router.navigate(["/bookmarkCategoryDetail", id]);
    }
    removeBookmarkCategory(id) {

        this.display = 'block'; //Set block css -- for Dialog
        this.bookmarkCategoryIdToDelete = id;

        //this.employeeService.DeleteEmployee(id).subscribe(

        //    resp => {

        //        this.IsEmployeeDeleted = resp;
        //        this.getAllEmployees();
        //    }

        //);


    }
    AddNewBookmarkCategory() {

        this._router.navigate(["/AddNewCategory"]);
    }
    ShowBookmarkList() {

        this._router.navigate(["/boomkarklist"]);
    }

    updateBookmarkCategory(id) {

        this._router.navigate(["/UpdateBookmarkCategory", id]);
    }

    openModalDialog() {
        this.display = 'block'; //Set block css
    }

    closeModalDialog() {
        this.display = 'none'; //set none css after close dialog
    }

    DeleteBookmarkCategory(response) {
        if (response == "Yes") {

            this.categoryService.DeleteCategory(this.bookmarkCategoryIdToDelete).subscribe(

                resp => {

                    this.IsBookmarkCategoryDeleted = resp;
                    this.getAllBookmarkCategories();
                    this.closeModalDialog();
                }

            );
        }
        else
            this.closeModalDialog();
    }
    FilterByCategoryName(filterBy) {
        if (filterBy.length == 0) {

            this.getAllBookmarkCategories();
        }
        else {

            this.categoryService.getCategoriesByName(filterBy).subscribe(

                categories => {

                    this.bookmarkCategories = categories;
                }
            );
        }
        

    }

}
