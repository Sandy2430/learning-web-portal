import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as bookReducer from './book-list.reducer';

export interface ProductsState {
  books: bookReducer.BookListState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  books: bookReducer.reducer,
};

/* creating selectors */

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

/* Books state */

export const getBookState = createSelector(
  getProductsState,
  (state: ProductsState) => state.books
);

export const getAllBooks = createSelector(getBookState, bookReducer.getBooks);
export const getBooksLoaded = createSelector(
  getBookState,
  bookReducer.getBooksLoaded
);
export const getBooksLoading = createSelector(
  getBookState,
  bookReducer.getBooksLoading
);
export const getAddToCardData = createSelector(
  getBookState,
  bookReducer.getAddToCartData
);

