import { TestBed } from "@angular/core/testing";
import { Actions } from "@ngrx/effects";
import { empty, Observable } from "rxjs";
import { cold, hot } from "jest-marbles";

import { BookListEffects } from "./book-list.effects";
import { AppService } from "../../app.service";
import { createSeachBookListState } from "src/app/tests/integration";
import * as fromAction from "../action";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}
describe("BookListEffects", () => {
  let actions: TestActions;
  let effects: BookListEffects;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookListEffects,
        {
          provide: Actions,
          useFactory: getActions,
        },
        {
          provide: AppService,
          useValue: {
            getBooks: jest.fn(),
          },
        },
      ],
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(BookListEffects);
    appService = TestBed.get(AppService);
  });

  test("effect should be created", () => {
    expect(effects).toBeTruthy();
  });
  describe("load book list", () => {
    test("should be loadBooks$ effect", () => {
      const books = createSeachBookListState();
      const action = fromAction.loadBookList();
      const outcome = fromAction.loadBookListSuccess({
        bookListDetails: books.completeBookSearchList.bookList,
      });

      actions.stream = hot("-a", { a: action });
      const response = cold("-a|", { a: books.completeBookSearchList.bookList });
      const expected = cold("--b", { b: outcome });
      appService.getBooks = jest.fn(() => response);
      expect(effects.loadBooks$).toBeObservable(expected);
    });
  });
});
