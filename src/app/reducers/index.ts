import { state } from "@angular/animations";
import { InjectionToken } from "@angular/core";
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State,
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { BookList, VolumeInfo } from "../models";
import { bookListReducers, BookState } from "./books.reducer";

export const bookStateRootFeatureKey = "bookStateRoot";

export interface AppState {
  bookList: BookState;
}
// export interface AppState {
//   books: BookList[];
//   selectedBook: VolumeInfo;
//   error: any;
// }

// export const selectedBook = (bookState: AppState) => bookState.selectedBook;
// export const selectAllBooks = (bookState: AppState) => bookState.books;

// export const initialState: AppState = {

// };
// export const initialState: AppState = {
//   books: undefined,
//   selectedBook: undefined,
//   error: undefined,
// };
// export const reducers: ActionReducerMap<AppState> = {
//   bookList: bookListReducers,
// };
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<any, Action>
>("Root reducers token", {
  factory: () => ({ bookList: bookListReducers }),
});
// export const reducers = createReducer(
//   initialState,
//   on(fromAction.loadBooksSuccess, (state, action) => {
//     return {
//       books: action.bookList,
//     };
//   }),
//   on(fromAction.loadBooksFailure, (state, action) => {
//     return {
//       books: state.books,
//       error: action.error,
//     };
//   })
// );

// export const selectBookFeature = createFeatureSelector<AppState>(
//   bookStateRootFeatureKey
// );

// export const selectBooks = createSelector(
//   selectBookFeature,
//   (bookState: AppState) => bookState.books
// );
// export const selectSingleBook = createSelector(
//   selectBookFeature,
//   (bookState: AppState) => bookState.selectedBook
// );
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
