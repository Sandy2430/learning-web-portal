import { createReducer, on, } from "@ngrx/store";
import { BookList, VolumeInfo } from "../models";
import * as BookListAction from "../store/book-list.action";

export const bookStateRootFeatureKey = "SearchBookList";
export interface BooksState {
  searchBook: string;
  bookList: BookList[];
  selectedBook: VolumeInfo;
  cartItem: VolumeInfo[];
  cartCount: number;
  proceedToBuy: VolumeInfo;
  purchasedItem: VolumeInfo[];
}

export const initialState: BooksState = {
  searchBook: "",
  bookList: [],
  selectedBook: undefined,
  cartItem: [],
  cartCount: null,
  proceedToBuy: undefined,
  purchasedItem: [],
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
  on(BookListAction.deleteCartItem, (state, action) => {
    return {
      ...state,
      cartItem: action.cartList.filter((cartItem, bookIndex) => {
        return bookIndex !== action.index;
      }),
    };
  })
);

