import { of } from "rxjs";
import { VolumeInfo } from "../models";
import { MyCollectionComponent } from "./my-collection.component";

describe("MyCollectionComponent", () => {
  let fixture: MyCollectionComponent;
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
    fixture = new MyCollectionComponent(mockFacadeService);
  });
  describe("Test: MyCollectionComponent", () => {
    it("My collection Component initialization", () => {
      expect(fixture).toBeTruthy();
    });
  });
  describe("Test: getUpdatedMyCollectionList", () => {
    it("Get my collection list", () => {
      fixture.ngOnInit();
      const response = {
        title: "Angular Momentum in Quantum Mechanics",
        authors: ["A. R. Edmonds"],
        publisher: "Princeton University Press",
        publishedDate: "1996",
        description:
          "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0691025894",
          },
          {
            type: "ISBN_13",
            identifier: "9780691025896",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 146,
        printType: "BOOK",
        categories: ["Science"],
        averageRating: 4,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.1.2.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C",
      };
      const spygetUpdatedMyCollectionList = jest
        .spyOn(mockFacadeService, "getBookList")
        .mockReturnValue(response);
      expect(mockFacadeService.getBookList()).toBe(response);
      expect(spygetUpdatedMyCollectionList).toHaveBeenCalled();
    });
  });
  describe("Test: purchasedData$", () => {
    it(`Get purchased data`, () => {
      const bookInfo = [
        {
          title: "Angular Momentum in Quantum Mechanics",
          authors: ["A. R. Edmonds"],
          publisher: "Princeton University Press",
          publishedDate: "1996",
          description:
            "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "0691025894",
            },
            {
              type: "ISBN_13",
              identifier: "9780691025896",
            },
          ],
          readingModes: {
            text: false,
            image: true,
          },
          pageCount: 146,
          printType: "BOOK",
          categories: ["Science"],
          averageRating: 4,
          ratingsCount: 1,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "2.1.2.0.preview.1",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false,
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          },
          language: "en",
          previewLink:
            "http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api",
          infoLink:
            "http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C",
        },
      ];
      spyOn(mockFacadeService, "getPurchasedData").and.returnValue(
        of(bookInfo)
      );
      fixture.ngOnInit();
      fixture.purchasedData$.subscribe((books: VolumeInfo[]) => {
        expect(books).toEqual(bookInfo);
      });
    });
  });
});
