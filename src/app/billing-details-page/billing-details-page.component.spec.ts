import { FormBuilder } from "@angular/forms";
import { convertToParamMap } from "@angular/router";
import { of } from "rxjs";

import { BillingDetailsPageComponent } from "./billing-details-page.component";

describe("BillingDetailsPageComponent", () => {
  let fixture: BillingDetailsPageComponent;
  let mockFacadeService: any;
  let formBuilderMock: FormBuilder;
  let modalServiceMock: any;

  beforeEach(() => {
    mockFacadeService = {
      getProceedToBuyInfo: jest.fn(),
    };
    formBuilderMock = new FormBuilder();
    fixture = new BillingDetailsPageComponent(
      formBuilderMock,
      mockFacadeService,
      modalServiceMock
    );
    // fixture.ngOnInit();
  });

  describe("Test: ngOnInit", () => {
    it("Should billing form defined", () => {
      expect(fixture.initBillingForm).toBeDefined();
    });
    it("Should initialized billing form", () => {
      const mockBillingForm = {
        userName: "",
        userEmail: "",
        phoneNumber: "",
        address: "",
      };
      fixture.initBillingForm();
      expect(fixture.billingForm.value).toEqual(mockBillingForm);
    });
    it("Billing form should be valid", () => {
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
    it("User name should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.userName.setValue("");
      expect(fixture.billingForm.controls.userName.invalid).toBeTruthy();
    });
    it("User email should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.userEmail.setValue("");
      expect(fixture.billingForm.controls.userEmail.invalid).toBeTruthy();
    });
    it("User phone nuber should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.phoneNumber.setValue("");
      expect(fixture.billingForm.controls.phoneNumber.invalid).toBeTruthy();
    });
    it("User address should be invalid", () => {
      fixture.initBillingForm();
      fixture.billingForm.controls.address.setValue("");
      expect(fixture.billingForm.controls.address.invalid).toBeTruthy();
    });
  });

  describe("Test: Facade service", () => {
    it("getProceedToBuyInfo", () => {
      const response = {
        allowAnonLogging: null,
        userName: "",
        userEmail: "",
        phoneNumber: "",
        address: "",
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
      const spyupdateMyCollectionList = jest
        .spyOn(mockFacadeService, "getProceedToBuyInfo")
        .mockReturnValue(response);
      expect(mockFacadeService.getProceedToBuyInfo()).toBe(response);
      expect(spyupdateMyCollectionList).toHaveBeenCalled();
    });
  });
});
