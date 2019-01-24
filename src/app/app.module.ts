import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination/dist/ngx-pagination'; // <-- import the module
//import { ChartModule } from 'angular-highcharts';// <-- HighCharts

import { AppComponent } from './app.component';
import { AddNewBookmarkComponent } from './Bookmarklist/add-new-bookmark/add-new-bookmark.component';
import { BookmarkListComponent } from './Bookmarklist/bookmark-list/bookmark-list.component';
import { UpdateBookmarkitemComponent } from './Bookmarklist/update-bookmarkitem/update-bookmarkitem.component';
import { AddNewBookmarkCategoryComponent } from './BookmarkCategory/add-new-bookmark-category/add-new-bookmark-category.component';
import { UpdateBookmarkCategoryComponent } from './BookmarkCategory/update-bookmark-category/update-bookmark-category.component';
import { BookmarkCategoriesComponent } from './BookmarkCategory/bookmark-categories/bookmark-categories.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    { path: 'bookmarklist', component: BookmarkListComponent },
    //{ path: 'employeeDetail/:id', component: EmployeedetailComponent },
    { path: 'AddNewBookmarkItem', component: AddNewBookmarkComponent },
    { path: 'UpdateBookmarkItem/:id', component: UpdateBookmarkitemComponent },
    { path: 'bookmarkcategories', component: BookmarkCategoriesComponent },
    { path: 'AddNewCategory', component: AddNewBookmarkCategoryComponent },
    { path: 'UpdateBookmarkCategory/:id', component: UpdateBookmarkCategoryComponent },
    { path: '', component: BookmarkListComponent },
    { path: '**', component: BookmarkListComponent },

];

@NgModule({
    declarations: [
        AppComponent,
        AddNewBookmarkComponent,
        BookmarkListComponent,
        UpdateBookmarkitemComponent,
        AddNewBookmarkCategoryComponent,
        UpdateBookmarkCategoryComponent,
        BookmarkCategoriesComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,// <-- include it in your app module
        //ChartModule,//<-- High Charts
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
