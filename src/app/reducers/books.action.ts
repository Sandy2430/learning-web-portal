import { createAction, props } from "@ngrx/store";
import { BookList, VolumeInfo } from "../models";

export const getBook = createAction("Get book", props<{ id: string }>());
export const getBookSuccess = createAction(
  "Get Book list success",
  props<{ fullBookDetail: BookList }>()
);
export const addDataTOCart = createAction(
  "Add Book to cart",
  props<{ addToCart: BookList[] }>()
);
