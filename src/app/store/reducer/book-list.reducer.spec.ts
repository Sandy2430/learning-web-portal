import * as fromAction from "../action/book-list.action";
import * as fromReducer from "../reducer";
import { BookList, VolumeInfo } from "../../models";

describe("Show reducer", () => {
  describe("Unknown action", () => {
    test("It should return default state", () => {
      const { initialState } = fromReducer;
      const action = { type: "unknown" };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
      expect(state).toEqual(initialState);
    });
  });
  describe("loadBookList action", () => {
    test("It should return default state", () => {
      const loadType = "[Load Book List]";
      const loadBookList = fromAction.loadBookList();
      expect(loadType).toBe(loadBookList.type);
    });
  });
  describe("getLoadSearchData action", () => {
    test("Get search data", () => {
      const searchData = "angular";
      const searchItem = fromAction.loadSearchData({ searchItem: searchData });
      expect(searchData).toBe(searchItem.searchItem);
    });
    test("Get search data type", () => {
      const searchData = "";
      const searchType = "[Get Search String]";
      const searchItem = fromAction.loadSearchData({ searchItem: searchData });
      expect(searchType).toBe(searchItem.type);
    });
  });
  describe("getAllSuccess action", () => {
    test("Should update the state in an imutable way", () => {
      const { initialState } = fromReducer;
      const newState: BookList[] = [
        {
          kind: "books#volume",
          id: "0BSOg0oHhZ0C",
          etag: "sWJBeRbxMK0",
          selfLink: "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
          volumeInfo: {
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
          saleInfo: {
            country: "IN",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "IN",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "\u003cb\u003eAngular\u003c/b\u003e Momentum of a System of Particles PRELIMINARY REMARKS . In \u003cbr\u003e\nclassical mechanics the \u003cb\u003eangular\u003c/b\u003e momentum of a system of n particles relative to a \u003cbr\u003e\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position \u003cbr\u003e\nvector&nbsp;...",
          },
        },
      ];
      const action = fromAction.loadBookListSuccess({
        bookListDetails: newState,
      });
      const state = fromReducer.reducer(initialState, action);
      expect(state.bookList).toEqual(newState);
    });
  });
  describe("loadBookListFailure", () => {
    test("get book error", () => {
      const { initialState } = fromReducer;
      const err = new Error();
      const action = fromAction.loadBookListFailure({ bookError: err });
      const state = fromReducer.reducer(initialState, action);
      expect(state.bookError).toEqual(err);
    });
  });
  describe("loadSpecificBook action", () => {
    test("Should load specific state of the book", () => {
      const { initialState } = fromReducer;
      const specificBookState: VolumeInfo = {
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
      const action = fromAction.loadSpecificBook({
        book: specificBookState,
      });
      const state = fromReducer.reducer(initialState, action);
      expect(specificBookState).toBe(state.selectedBook);
    });
  });
  describe("addBookToCart action", () => {
    test("Should load cartItem list state", () => {
      const { initialState } = fromReducer;
      const addBookToCartState: VolumeInfo[] = [
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
      const action = fromAction.addBookToCart({
        cartData: addBookToCartState,
      });
      const state = fromReducer.reducer(initialState, action);
      expect(addBookToCartState).toBe(state.cartItem);
    });
    test("Get cart length", () => {
      const { initialState } = fromReducer;
      const cartLen = 1;
      const action = fromAction.loadCartCount({ cartCount: cartLen });
      const state = fromReducer.reducer(initialState, action);

      expect(cartLen).toBe(state.cartCount);
    });
    test("Get cart length zero", () => {
      const { initialState } = fromReducer;
      const cartLen = 0;
      const action = fromAction.loadCartCount({ cartCount: cartLen });
      const state = fromReducer.reducer(initialState, action);
      expect(cartLen).toBe(state.cartCount);
    });
  });
  describe("loadBuyItem action", () => {
    test("Get full book info which need to be purchased", () => {
      const { initialState } = fromReducer;
      const bookPurchaseState: VolumeInfo = {
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
      const action = fromAction.loadBuyItem({ buy: bookPurchaseState });
      const state = fromReducer.reducer(initialState, action);
      expect(bookPurchaseState).toBe(state.proceedToBuy);
    });
  });
  describe("loadPurchaseItem action", () => {
    test("Get book purchased itrm details", () => {
      const { initialState } = fromReducer;
      const bookPurchaseInfo: VolumeInfo[] = [
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
      const action = fromAction.loadPurchaseItem({
        purchaseList: bookPurchaseInfo,
      });
      const state = fromReducer.reducer(initialState, action);
      expect(bookPurchaseInfo).toBe(state.purchasedItem);
    });
    test("Get myCollection length", () => {
      const { initialState } = fromReducer;
      const myCollectionLen = 1;
      const action = fromAction.loadBookPurchasedCount({
        purchasedCount: myCollectionLen,
      });
      const state = fromReducer.reducer(initialState, action);
      expect(myCollectionLen).toBe(state.collectionCount);
    });
  });
});
