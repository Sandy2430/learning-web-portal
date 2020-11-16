import { Action } from "../actions";
import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from "../actions/book-list.actions";
import { BookList } from '../models/book-list.model';

export interface BookListReducerState {
  loading: boolean;
  loaded: boolean;
  bookList: BookList[];
}

const initailState: BookListReducerState = {
  loaded: false,
  loading: false,
  bookList: [],
};
export function BookListReducer(
  state = initailState,
  action: Action
): BookListReducerState {
  switch (action.type) {
    case BOOK_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case BOOK_LIST_SUCCESS: {
    //   const data = action.payload.bookList;
      const updatedBookList = state.bookList.concat(action.payload.bookList);
      return { ...state, loading: false, loaded: true, bookList: updatedBookList };
    }
    default: {
        return state;
    }
  }
}

// selectors

export const getLoading = (state: BookListReducerState) => state.loading;
export const getLoaded = (state: BookListReducerState) => state.loaded;
export const getBookList = (state: BookListReducerState) => state.bookList;
