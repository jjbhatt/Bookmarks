import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {BookmarkCategorymodel} from './bookmark-categorymodel'

@Injectable({
    providedIn: 'root'
})
export class BookmarkCategoryServiceService {

    debugger;
    categories: BookmarkCategorymodel[];

    constructor(private httpService: HttpClient) { }

    getAllCategories() {

        return this.httpService.get<BookmarkCategorymodel[]>("http://localhost/BookmarkAPI/api/BookmarkCategory/GetAllBookmarkCategories");
    }

    getCategoryByID(id) {

        return this.httpService.get<BookmarkCategorymodel>("http://localhost/BookmarkAPI/api/BookmarkCategory/GetBookmarkCategoryById/" + id);
    }

    DeleteCategory(id) {

        return this.httpService.delete("http://localhost/BookmarkAPI/api/BookmarkCategory/DeleteBookmarkCategory/" + id);
    }
    AddNewCategory(category) {
        return this.httpService.post("http://localhost/BookmarkAPI/api/BookmarkCategory/CreateBookmarkCategory/", category);
    }
    UpdateCategory(id, category) {

        return this.httpService.put("http://localhost/BookmarkAPI/api/BookmarkCategory/UpdateBookmarkCategory/" + id, category);

    }
    getCategoriesByName(categoryName) {

        return this.httpService.get<BookmarkCategorymodel[]>("http://localhost/BookmarkAPI/api/BookmarkCategory/GetCategoriesByName/" + categoryName);
    }

}
