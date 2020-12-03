import { createAction, props } from "@ngrx/store";
import { BookList, VolumeInfo } from "../models";

export const loadBooks = createAction("[Books list] Load Bookss");

export const loadBooksSuccess = createAction(
  "[Books list] Load Books Success",
  props<{ bookList: BookList[] }>()
);

export const loadBooksFailure = createAction(
  "[Books list] Load Books Failure",
  props<{ error: any }>()
);

export const getSingleBook = createAction(
  "[Book Detail] Load book detail",
  props<{ book: VolumeInfo }>()
);
