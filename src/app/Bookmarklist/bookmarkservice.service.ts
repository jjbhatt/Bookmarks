import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {BookmarkListModel} from './bookmark-list-model'


@Injectable({
    providedIn: 'root'
})
export class BookmarkserviceService {

    constructor(private httpService: HttpClient) { }

    getAllBookmarkItems() {

        return this.httpService.get<BookmarkListModel[]>("http://localhost/BookmarkAPI/api/BookmarkLists/GetAllBookmarkLists");
    }

    getBookmarkItemByID(id) {

        return this.httpService.get<BookmarkListModel>("http://localhost/BookmarkAPI/api/BookmarkLists/GetBookmarkListById/" + id);
    }

    DeleteBookmarkItem(id) {

        return this.httpService.delete("http://localhost/BookmarkAPI/api/BookmarkLists/DeleteBookmarkItem/" + id);
    }
    AddNewBookmarkItem(category) {
        return this.httpService.post("http://localhost/BookmarkAPI/api/BookmarkLists/AddNewBookmark", category);
    }
    UpdateBookmarkItem(id, category) {

        return this.httpService.put("http://localhost/BookmarkAPI/api/BookmarkLists/UpdateBookmarkList/" + id, category);

    }
    getBookmarkListByName(bookmarkName) {

        return this.httpService.get<BookmarkListModel[]>("http://loclahostBookmarkAPI/api/BookmarkLists/GetBookmarkListByName/" + bookmarkName);
    }

    getBookmarkListByCategory(bookmarkCategoryId) {

        return this.httpService.get<BookmarkListModel[]>("http://localhost/BookmarkAPI/api/BookmarkLists/GetBookmarkListByCategory/" + bookmarkCategoryId);
    }
}
