import { createAction, props } from "@ngrx/store";
import { BookList, VolumeInfo } from "../../models";

export const loadSearchData = createAction(
  "[Get Search String]",
  props<{ searchItem: string }>()
);
export const loadBookList = createAction("[Load Book List]");
export const loadBookListSuccess = createAction(
  "[Load Book List Success]",
  props<{ bookListDetails: BookList[] }>()
);
export const loadBookListFailure = createAction(
  "[Load Book List Failure]",
  props<{ bookError: any }>()
);
export const loadSpecificBook = createAction(
  "[Load Specific Book Detail]",
  props<{ book: VolumeInfo }>()
);
export const addBookToCart = createAction(
  "[Add Book To Cart]",
  props<{ cartData: VolumeInfo[] }>()
);
export const loadCartCount = createAction(
  "[Get Cart Count]",
  props<{ cartCount: number }>()
);
export const loadBuyItem = createAction(
  "Load PurchaseItem",
  props<{ buy: VolumeInfo }>()
);
export const loadBookPurchasedCount = createAction(
  "[Get Book Purchased Count]",
  props<{ purchasedCount: number }>()
);
export const loadPurchaseItem = createAction(
  "Load PurchaseItem",
  props<{ purchaseList: VolumeInfo[] }>()
);
