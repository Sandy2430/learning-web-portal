export const BOOK_LIST_REQUEST = 'book list request';
export const BOOK_LIST_SUCCESS = 'book list request';

export class BookListRequestAction {
    readonly type = BOOK_LIST_REQUEST;
}
export class BookListSuccessAction {
    readonly type = BOOK_LIST_SUCCESS;
    constructor(public payload?: {bookList: any}) {}
}
