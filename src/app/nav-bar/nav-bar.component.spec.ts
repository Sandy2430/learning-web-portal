
import { NavBarComponent } from "./nav-bar.component";

describe("OptionSectionComponent", () => {
  let fixture: NavBarComponent;
  let mockAppService: any;

  beforeEach(() => {
    mockAppService = {
      getUpdatedCartLength: jest.fn(),
      getUpdatedMyCollectionList: jest.fn(),
      getMyCollectionLength: jest.fn(),
    };
    fixture = new NavBarComponent(mockAppService);
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
        .spyOn(mockAppService, "getUpdatedCartLength")
        .mockReturnValue(responseData);
      expect(mockAppService.getUpdatedCartLength()).toBe(responseData);
      expect(spygetUpdatedCartLength).toHaveBeenCalled();
    });
  });
  describe("Test: getUpdatedMyCollectionList function", () => {
    it("should get updated my collection length value", () => {
      const responseData = 1;
      const spygetUpdatedMyCollectionList = jest
        .spyOn(mockAppService, "getUpdatedMyCollectionList")
        .mockReturnValue(responseData);
      expect(mockAppService.getUpdatedMyCollectionList()).toBe(responseData);
      expect(spygetUpdatedMyCollectionList).toHaveBeenCalled();
    });
  });
  describe("Test: getMyCollectionLength function", () => {
    it("should get my collection length value", () => {
      const responseData = 1;
      const spygetMyCollectionLength = jest
        .spyOn(mockAppService, "getMyCollectionLength")
        .mockReturnValue(responseData);
      expect(mockAppService.getMyCollectionLength()).toBe(responseData);
      expect(spygetMyCollectionLength).toHaveBeenCalled();
    });
  });
});
