import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromBookList from './book-list.reducer';

export interface RootReducerState {
        bookList: fromBookList.BookListReducerState;
}
export const rootReducer: ActionReducerMap<RootReducerState> = {
    bookList: fromBookList.BookListReducer
};

export const getBookListState = (state: RootReducerState) => state.bookList;

export  const getBookListLoaded = createSelector(getBookListState, fromBookList.getLoaded);
export  const getBookListLoading = createSelector(getBookListState, fromBookList.getLoading);
export  const getBookLists = createSelector(getBookListState, fromBookList.getBookList);
