import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { BookList, VolumeInfo } from "../../models";
import * as BookListAction from "../action";

export const bookStateRootFeatureKey = "SearchBookList";
export interface BooksState {
  searchBook: string;
  bookList: BookList[];
  bookError: string;
  selectedBook: VolumeInfo;
  cartItem: VolumeInfo[];
  cartCount: number;
  collectionCount: number;
  proceedToBuy: VolumeInfo;
  purchasedItem: VolumeInfo[];
}

export const initialState: BooksState = {
  searchBook: "",
  bookList: [],
  bookError: "",
  selectedBook: undefined,
  cartItem: [],
  cartCount: null,
  proceedToBuy: undefined,
  purchasedItem: [],
  collectionCount: null,
};

export const booksReducers = createReducer(
  initialState,
  on(BookListAction.loadSearchData, (state, action) => {
    return {
      ...state,
      searchBook: action.searchItem,
    };
  }),
  on(BookListAction.loadBookList, (state, action) => {
    return {
      ...state,
    };
  }),
  on(BookListAction.loadBookListSuccess, (state, action) => {
    return {
      ...state,
      bookList: action.bookListDetails,
    };
  }),
  on(BookListAction.loadBookListFailure, (state, action) => {
    return {
      ...state,
      bookError: action.bookError,
    };
  }),
  on(BookListAction.loadSpecificBook, (state, action) => {
    return {
      ...state,
      selectedBook: action.book,
    };
  }),
  on(BookListAction.addBookToCart, (state, action) => {
    return {
      ...state,
      cartItem: action.cartData,
    };
  }),
  on(BookListAction.loadCartCount, (state, action) => {
    return {
      ...state,
      cartCount: action.cartCount,
    };
  }),
  on(BookListAction.loadBuyItem, (state, action) => {
    return {
      ...state,
      proceedToBuy: action.buy,
    };
  }),
  on(BookListAction.loadPurchaseItem, (state, action) => {
    return {
      ...state,
      purchasedItem: action.purchaseList,
    };
  }),
  on(BookListAction.loadBookPurchasedCount, (state, action) => {
    return {
      ...state,
      collectionCount: action.purchasedCount,
    };
  })
);

export function reducer(state: BooksState, action: Action) {
  return booksReducers(state, action);
}
