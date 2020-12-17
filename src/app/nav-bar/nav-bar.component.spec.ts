import { of } from "rxjs";

import { NavBarComponent } from "./nav-bar.component";

describe("OptionSectionComponent", () => {
  let fixture: NavBarComponent;
  let mockFacadeService: any;

  beforeEach(() => {
    mockFacadeService = {
      getBookList: jest.fn(),
      getCompleteBookInfo: jest.fn(),
      getCartItems: jest.fn(),
      getCartLength: jest.fn(),
      getProceedToBuyInfo: jest.fn(),
      getPurchasedData: jest.fn(),
      getMyCollectionLength: jest.fn(),
      dispatch: jest.fn(),
    };
    fixture = new NavBarComponent(mockFacadeService);
  });
  describe("Test: NavBarComponent", () => {
    test("should create", () => {
      expect(fixture).toBeDefined();
    });
  });
  describe("Test: getUpdatedCartLength function", () => {
    test("should get updated cart length value", () => {
      const responseData = 1;
      fixture.bookFacade = mockFacadeService;
      spyOn(mockFacadeService, "getCartLength").and.returnValue(
        of(responseData)
      );
      fixture.ngOnInit();
      fixture.cartLength$.subscribe((cartLen) => {
        expect(cartLen).toEqual(responseData);
      });
    });
  });
  describe("Test: getMyCollectionLength function", () => {
    test("should get my collection length value", () => {
      const responseData = 1;
      fixture.bookFacade = mockFacadeService;
      spyOn(mockFacadeService, "getMyCollectionLength").and.returnValue(
        of(responseData)
      );
      fixture.ngOnInit();
      fixture.collectionLength$.subscribe((collectionLen) => {
        expect(collectionLen).toEqual(responseData);
      });
    });
  });
});
