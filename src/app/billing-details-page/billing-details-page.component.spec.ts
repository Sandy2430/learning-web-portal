import { FormBuilder } from "@angular/forms";
import { of } from "rxjs";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { BillingDetailsPageComponent } from "./billing-details-page.component";
import { async } from "@angular/core/testing";

describe("BillingDetailsPageComponent", () => {
  let fixture: BillingDetailsPageComponent;
  let mockFacadeService: any;
  let formBuilderMock: FormBuilder;
  let modalServiceMock: any;
  let modalService: BsModalService;
  let modalRef: BsModalRef;

  beforeEach(async(() => {}));
  beforeEach(() => {
    mockFacadeService = {
      getProceedToBuyInfo: jest.fn(),
      loadPurchaseItem: jest.fn(),
      loadBookPurchasedCount: jest.fn(),
    };
    formBuilderMock = new FormBuilder();
    modalServiceMock = {
      show: jest.fn(),
    };
    fixture = new BillingDetailsPageComponent(
      formBuilderMock,
      mockFacadeService,
      modalServiceMock
    );
  });
  describe("Test: proceedToBuy$", () => {
    test("Get proceed to buy response", () => {
      const bookInfo = {
        title: "Angular Momentum in Quantum Mechanics",
        authors: ["A. R. Edmonds"],
        publisher: "Princeton University Press",
        publishedDate: "1996",
        description:
          "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-fixture system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
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
      fixture.bookFacade = mockFacadeService;
      spyOn(mockFacadeService, "getProceedToBuyInfo").and.returnValue(
        of(bookInfo)
      );
      fixture.ngOnInit();
      fixture.proceedToBuy$.subscribe((purchaseInfo) => {
        expect(purchaseInfo).toEqual(bookInfo);
      });
    });
  });
  describe("Test: initBillingForm", () => {
    test("Should billing form defined", () => {
      expect(fixture.initBillingForm).toBeDefined();
    });
    test("Should initialized billing form", () => {
      const mockBillingForm = {
        userName: "",
        userEmail: "",
        phoneNumber: "",
        address: "",
      };
      fixture.initBillingForm();
      expect(fixture.billingForm.value).toEqual(mockBillingForm);
    });
    test("Billing form should be valid", () => {
      const mockBillingForm = {
        userName: "Sandeep",
        userEmail: "sandeep@gmail.com",
        phoneNumber: "9876543210",
        address: "Chennai Anna nagar",
      };
      fixture.initBillingForm();
      fixture.billingForm.controls.userName.setValue("Sandeep");
      fixture.billingForm.controls.userEmail.setValue("sandeep@gmail.com");
      fixture.billingForm.controls.phoneNumber.setValue("9876543210");
      fixture.billingForm.controls.address.setValue("Chennai Anna nagar");
      expect(fixture.billingForm.value).toEqual(mockBillingForm);
      expect(fixture.billingForm.valid).toBeTruthy();
    });
    test("User name should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.userName.setValue("");
      expect(fixture.billingForm.controls.userName.invalid).toBeTruthy();
    });
    test("User email should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.userEmail.setValue("");
      expect(fixture.billingForm.controls.userEmail.invalid).toBeTruthy();
    });
    test("User phone nuber should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.phoneNumber.setValue("");
      expect(fixture.billingForm.controls.phoneNumber.invalid).toBeTruthy();
    });
    test("User address should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.address.setValue("");
      expect(fixture.billingForm.controls.address.invalid).toBeTruthy();
    });
  });

  describe("Test: loadPurchaseItem", async () => {
    xtest("modalService", () => {
      const template: any = "";
      const formDataMock = {
        userName: "XYZ",
        userEmail: "XYZ@gmail.com",
        phoneNumber: "0000000000",
        address: "cape town",
      };
      const modalSpy = jest.spyOn(modalServiceMock, "show").mockReturnValue(modalRef);
      fixture.billingDetails(template, formDataMock);
      expect(modalServiceMock.show()).toHaveBeenCalled();
    });
    xtest("Get purchase item", () => {
      const template: any = "";
      const formDataMock = {
        userName: "XYZ",
        userEmail: "XYZ@gmail.com",
        phoneNumber: "0000000000",
        address: "cape town",
      };
      const purchaseResponse = [
        {
          userName: "xyz",
          userEmail: "xyz@gmail.com",
          phoneNumber: "9876543210",
          address: "cape Town",
          title: "Angular Momentum in Quantum Mechanics",
          authors: ["A. R. Edmonds"],
          publisher: "Princeton University Press",
          publishedDate: "1996",
          description:
            "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-fixture system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
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
      // fixture.billingDetails(template, purchaseResponse);
      // fixture.bookFacade = mockFacadeService;
      const loadPurchaseSpy = jest
        .spyOn(mockFacadeService, "loadPurchaseItem")
        .mockReturnValue(purchaseResponse);
      fixture.billingDetails(template, formDataMock);
      expect(mockFacadeService.loadPurchaseItem()).toBe(purchaseResponse);
      expect(loadPurchaseSpy).toHaveBeenCalled();
    });
  });
});
