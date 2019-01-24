import { Component, OnInit } from '@angular/core';
import {BookmarkserviceService} from '../bookmarkservice.service'
import {BookmarkCategoryServiceService} from '../../BookmarkCategory/bookmark-category-service.service'
import {BookmarkCategorymodel} from '../../BookmarkCategory/bookmark-categorymodel'
import {BookmarkListModel} from '../bookmark-list-model'
import {Router} from '@angular/router'
import {ExcelServiceService} from '../../excel-service.service';



@Component({
    selector: 'app-bookmark-list',
    templateUrl: './bookmark-list.component.html',
    styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

    p: number = 1;
    bookmarkItems: BookmarkListModel[];
    IsBookmarkItemDeleted: any;
    display = 'none'; //default Variable --- for Dialog
    bookmarkItemIdToDelete: any;
    ddlfilterby: any;
    ddlFilterSelectedValue: any;
    categoriylist: any;

    constructor(private bookmarkService: BookmarkserviceService, private _router: Router, private categoryService: BookmarkCategoryServiceService, private excelService: ExcelServiceService) {


    }

    ngOnInit() {

        this.getAllBookmarkItems();
        this.ddlfilterby = [{ 'name': 'Name', 'value': 'Name' }, { 'name': 'Category', 'value': 'Category' }];
        //this.loadCharts();
    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.bookmarkItems, 'BookmarkList');
    }
    getAllBookmarkItems() {

        this.bookmarkService.getAllBookmarkItems().subscribe(

            bms => {
                this.bookmarkItems = bms;
                console.log(bms);
            }
        );
    }
    getAllCategories() {

        this.categoryService.getAllCategories().subscribe(

            categories => {

                this.categoriylist = categories;
            }
        );
    }
    showBookmarkItemDetail(id) {

        this._router.navigate(["/bookmarkitemDetail", id]);
    }
    removeBookmarkItem(id) {

        this.display = 'block'; //Set block css -- for Dialog
        this.bookmarkItemIdToDelete = id;

        //this.employeeService.DeleteEmployee(id).subscribe(

        //    resp => {

        //        this.IsEmployeeDeleted = resp;
        //        this.getAllEmployees();
        //    }

        //);


    }
    getCategoryById(Id) {


    }
    AddNewBookmarkItem() {

        this._router.navigate(["/AddNewBookmarkItem"]);
    }

    updateBookmarkItem(id) {

        this._router.navigate(["/UpdateBookmarkItem", id]);
    }

    openModalDialog() {
        this.display = 'block'; //Set block css
    }

    closeModalDialog() {
        this.display = 'none'; //set none css after close dialog
    }

    DeleteBookmarkItem(response) {
        if (response == "Yes") {

            this.bookmarkService.DeleteBookmarkItem(this.bookmarkItemIdToDelete).subscribe(

                resp => {

                    this.IsBookmarkItemDeleted = resp;
                    this.getAllBookmarkItems();
                    this.closeModalDialog();
                }

            );
        }
        else
            this.closeModalDialog();
    }
    FilterByCategoryName(filterBy) {

        console.log(filterBy);

        if (filterBy == undefined) {

            this.getAllBookmarkItems();
        }
        else {
            this.bookmarkService.getBookmarkListByCategory(filterBy).subscribe(

                bms => {

                    this.bookmarkItems = bms;
                }
            );
        }

    }
    FilterByBookmarkName(filterBy) {

        console.log(filterBy);

        if (filterBy.length == 0) {

            this.getAllBookmarkItems();
        }
        else {
            this.bookmarkService.getBookmarkListByName(filterBy).subscribe(

                bms => {

                    this.bookmarkItems = bms;
                }
            );
        }
    }
    filterBySelected(selectedValue) {

        if (selectedValue == 'Category') {
            this.getAllCategories();
        }

    }
    loadCharts() {
        //let chart = new CanvasJS.Chart("chartContainer", {
        //    animationEnabled: true,
        //    exportEnabled: true,
        //    title: {
        //        text: "Bookmark Categories"
        //    },
        //    data: [{
        //        type: "column",
        //        dataPoints: [
        //            { y: 71, label: "Apple" },
        //            { y: 55, label: "Mango" },
        //            { y: 50, label: "Orange" },
        //            { y: 65, label: "Banana" },
        //            { y: 95, label: "Pineapple" },
        //            { y: 68, label: "Pears" },
        //            { y: 128, label: "Gra" },
        //            { y: 34, label: "Lychee" },
        //            { y: 14, label: "Jackfruit" }
        //        ]
        //    }]
        //});

        //chart.render();
    }
}
