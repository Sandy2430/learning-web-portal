
import { BookDetailComponent } from "./book-detail.component";

describe("BookDetailComponent", () => {
  let fixture: BookDetailComponent;
  let mockAppServices: any;
  let mockRouter: any;
  beforeEach(() => {
    mockAppServices = {
      updateCartLength: jest.fn(),
      getUpdatedCartLength: jest.fn(),
      updateCartList: jest.fn(),
    };
    mockRouter = {
      navigate: jest.fn(),
    };
    fixture = new BookDetailComponent(mockAppServices, mockRouter);
  });

  describe("Test: BookDetailComponent", () => {
    it("Should BookDetailComponent initialize", () => {
      expect(fixture).toBeTruthy();
    });
  });
  describe("Test: AppService", () => {
    it("Should update cart list as null", () => {
      const mockCartLen = null;
      const response = null || [];
      const spyupdateCartList = jest
        .spyOn(mockAppServices, "updateCartList")
        .mockReturnValue(response);
      expect(mockAppServices.updateCartList(mockCartLen)).toBe(response);
      expect(spyupdateCartList).toHaveBeenCalledWith(mockCartLen);
    });
    it("Should update cart list with response data", () => {
      const mockCartLen = null;
      const sentBookData = {
        allowAnonLogging: null,
        authors: [],
        averageRating: null,
        canonicalVolumeLink: "",
        categories: [],
        contentVersion: "",
        description: "",
        imageLinks: {},
        industryIdentifiers: [],
        infoLink: "",
        language: "",
        maturityRating: "",
        pageCount: null,
        panelizationSummary: {},
        previewLink: "",
        printType: "",
        publishedDate: "",
        publisher: "",
        ratingsCount: null,
        readingModes: {},
        title: "",
      };
      const spyupdateCartList = jest
        .spyOn(mockAppServices, "updateCartList")
        .mockReturnValue(sentBookData);
      expect(mockAppServices.updateCartList(sentBookData)).toBe(sentBookData);
      expect(spyupdateCartList).toHaveBeenCalledWith(sentBookData);
    });
    it("Should update cart length", () => {
      const mockCartLen = 1;
      const spyupdateCartLen = jest
        .spyOn(mockAppServices, "updateCartLength")
        .mockReturnValue(mockCartLen);
      expect(mockAppServices.updateCartLength(mockCartLen)).toBe(mockCartLen);
      expect(spyupdateCartLen).toHaveBeenCalledWith(mockCartLen);
    });
  });
  describe("Test: Add to cart function", () => {
    it("Should initialize addToCart function", () => {
      const spyaddToCart = jest.spyOn(fixture, "addToCart");
      expect(fixture.addToCart).toBeTruthy();
    });
  });
});
