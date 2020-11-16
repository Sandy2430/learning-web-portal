import { Action } from '@ngrx/store';
import { VolumeInfo } from '../../models';

/* List of search result actions */

export enum bookListActions {
    LOAD_BOOKS = '[Books] load books',
    LOAD_BOOKS_SUCCESS = '[Books] load books success',
    LOAD_BOOKS_FAIL = '[Books] load books fail',
}

/* List of actions class */


export class LoadBooksAction implements Action {
    readonly type = bookListActions.LOAD_BOOKS;
}
export class LoadBooksSuccessAction implements Action {
    readonly type = bookListActions.LOAD_BOOKS_SUCCESS;
    constructor(public payload: VolumeInfo[]) {}
}
export class LoadBooksFailAction implements Action {
    readonly type = bookListActions.LOAD_BOOKS_FAIL;
    constructor(public payload: string) {}
}

/* Total actions */

export type BookActions = LoadBooksAction | LoadBooksSuccessAction | LoadBooksFailAction;
