import { convertToParamMap } from "@angular/router";
import { of } from "rxjs";

import { CompleteBookReferenceComponent } from "./complete-book-reference.component";

describe("CompleteBookReferenceComponent", () => {
  let fixture: CompleteBookReferenceComponent;
  let routeMock: any;

  beforeEach(() => {
    const bookInfo = {
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
    routeMock = {
      queryParams: of(convertToParamMap(bookInfo)),
    };
    fixture = new CompleteBookReferenceComponent(routeMock);
  });
  describe("Test: Query params", () => {
    it("Should get query params", () => {
      expect(routeMock.queryParams).toBeTruthy();
    });
  });
  describe("Test: Get complete book details", () => {
    it("Get full book data", () => {
      const completeBookInfo = {
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
      const getCompleteBookRef = jest.spyOn(fixture, "getFullBookDetails");
      expect(getCompleteBookRef).not.toHaveBeenCalled();
    });
  });
});
