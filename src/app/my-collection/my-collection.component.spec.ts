import { MyCollectionComponent } from "./my-collection.component";

describe("MyCollectionComponent", () => {
  let fixture: MyCollectionComponent;
  let mockAppService: any;

  beforeEach(() => {
    mockAppService = {
      getUpdatedMyCollectionList: jest.fn(),
    };
    fixture = new MyCollectionComponent(mockAppService);
  });
  describe("Test: MyCollectionComponent", () => {
    it("My collection Component initialization", () => {
      expect(fixture).toBeTruthy();
    });
    describe("Test: getUpdatedMyCollectionList", () => {
      it("Get my collection list", () => {
        const response = {
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
        const spygetUpdatedMyCollectionList = jest
          .spyOn(mockAppService, "getUpdatedMyCollectionList")
          .mockReturnValue(response);
        expect(mockAppService.getUpdatedMyCollectionList()).toBe(response);
        expect(spygetUpdatedMyCollectionList).toHaveBeenCalled();
      });
    });
  });
});
