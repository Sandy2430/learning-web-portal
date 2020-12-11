
import { BookDetailComponent } from "./book-detail.component";

describe("BookDetailComponent", () => {
  let fixture: BookDetailComponent;
  let mockFacadeService: any;
  let mockAppServices: any;
  let mockRouter: any;
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
    mockAppServices = {
      updateCartLength: jest.fn(),
      getUpdatedCartLength: jest.fn(),
      updateCartList: jest.fn(),
    };
    fixture = new BookDetailComponent(mockFacadeService);
  });

  describe("Test: BookDetailComponent", () => {
    it("Should BookDetailComponent initialize", () => {
      expect(fixture).toBeTruthy();
    });
  });
});
