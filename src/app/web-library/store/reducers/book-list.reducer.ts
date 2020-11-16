import * as fromBookList from '../actions';
import * as bookList from '../../models';

export interface BookListState {
  loading: boolean;
  loaded: boolean;
  data: bookList.VolumeInfo[];
  addToCart: bookList.VolumeInfo[];
}

export const initalState: BookListState = {
  loading: false,
  loaded: false,
  data: [],
  addToCart: []
};

export function reducer(
  state = initalState,
  action: fromBookList.BookActions
): BookListState {
  switch (action.type) {
    case fromBookList.bookListActions.LOAD_BOOKS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromBookList.bookListActions.LOAD_BOOKS_SUCCESS: {
      // console.log(action.payload);
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
        addToCart: data
      };
    }
    case fromBookList.bookListActions.LOAD_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}


export const getBooksLoading = (state: BookListState) => state.loading;
export const getBooksLoaded = (state: BookListState) => state.loaded;
export const getBooks = (state: BookListState) => state.data;
export const getAddToCartData = (state: BookListState) => state.addToCart;
export const getAddToCartDataLength = (state: BookListState) => state.addToCart.length;
