import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState } from "./book-list.reducer";

const getBookFeatureState = createFeatureSelector<BooksState>(
  "completeBookSearchList"
);

export const getSearch = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.searchBook
);

export const getBooks = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.bookList
);
export const getSelectedBook = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.selectedBook
);

export const getCartItem = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.cartItem
);
export const getCartCount = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.cartCount
);

export const getProceedToBuy = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.proceedToBuy
);
export const getPurchasedList = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.purchasedItem
);
