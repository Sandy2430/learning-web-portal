
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
    it("should create", () => {
      expect(fixture).toBeTruthy();
    });
  });
  describe("Test: getUpdatedCartLength function", () => {
    it("should get updated cart length value", () => {
      const responseData = 1;
      const spygetUpdatedCartLength = jest
        .spyOn(mockFacadeService, "getCartLength")
        .mockReturnValue(responseData);
      expect(mockFacadeService.getCartLength()).toBe(responseData);
      expect(spygetUpdatedCartLength).toHaveBeenCalled();
    });
  });
  describe("Test: getMyCollectionLength function", () => {
    it("should get my collection length value", () => {
      const responseData = 1;
      const spygetMyCollectionLength = jest
        .spyOn(mockFacadeService, "getMyCollectionLength")
        .mockReturnValue(responseData);
      expect(mockFacadeService.getMyCollectionLength()).toBe(responseData);
      expect(spygetMyCollectionLength).toHaveBeenCalled();
    });
  });
});
