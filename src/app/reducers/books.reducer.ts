import { createReducer, on } from "@ngrx/store";
import { BookList } from "../models";
import { getBook, getBookSuccess } from "./books.action";

export interface BookState {
  book: BookList;
  slectedBookId?: string;
}

export const initialState: BookState = {
  book: null,
};

export const bookListReducers = createReducer(
  initialState,
  on(getBook, (state, action) => {
    return {
      ...state,
      slectedBookId: undefined,
    };
  }),
  on(getBookSuccess, (state, action) => {
    return {
      ...state,
      slectedBookId: action.fullBookDetail.id
    };
  })
);
