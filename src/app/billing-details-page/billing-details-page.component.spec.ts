import { FormBuilder } from "@angular/forms";
import { convertToParamMap } from "@angular/router";
import { of } from "rxjs";

import { BillingDetailsPageComponent } from "./billing-details-page.component";

describe("BillingDetailsPageComponent", () => {
  let fixture: BillingDetailsPageComponent;
  let mockAppService: any;
  let formBuilderMock: FormBuilder;
  let routeMock: any;
  let modalServiceMock: any;

  beforeEach(() => {
    mockAppService = {
      updateMyCollectionList: jest.fn(),
    };
    formBuilderMock = new FormBuilder();
    routeMock = {
      queryParams: of(
        convertToParamMap({
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
        })
      ),
    };
    fixture = new BillingDetailsPageComponent(
      formBuilderMock,
      routeMock,
      mockAppService,
      modalServiceMock
    );
    fixture.ngOnInit();
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
      expect(fixture.billingForm.value).toEqual(mockBillingForm);
    });
    it("Should get query params", () => {
      expect(routeMock.queryParams).toBeTruthy();
    });
    it("Billing form should be valid", () => {
      const mockBillingForm = {
        userName: "Sandeep",
        userEmail: "sandeep@gmail.com",
        phoneNumber: "9876543210",
        address: "Chennai Anna nagar",
      };
      fixture.billingForm.controls.userName.setValue("Sandeep");
      fixture.billingForm.controls.userEmail.setValue("sandeep@gmail.com");
      fixture.billingForm.controls.phoneNumber.setValue("9876543210");
      fixture.billingForm.controls.address.setValue("Chennai Anna nagar");
      expect(fixture.billingForm.value).toEqual(mockBillingForm);
      expect(fixture.billingForm.valid).toBeTruthy();
    });
    it("User name should be invalid", () => {
      fixture.billingForm.controls.userName.setValue("");
      expect(fixture.billingForm.controls.userName.invalid).toBeTruthy();
    });
    it("User email should be invalid", () => {
      fixture.billingForm.controls.userEmail.setValue("");
      expect(fixture.billingForm.controls.userEmail.invalid).toBeTruthy();
    });
    it("User phone nuber should be invalid", () => {
      fixture.billingForm.controls.phoneNumber.setValue("");
      expect(fixture.billingForm.controls.phoneNumber.invalid).toBeTruthy();
    });
    it("User address should be invalid", () => {
      fixture.billingForm.controls.address.setValue("");
      expect(fixture.billingForm.controls.address.invalid).toBeTruthy();
    });
  });
  describe("Test: Query params", () => {
    it("Should get query params", () => {
      expect(routeMock.queryParams).toBeTruthy();
    });
  });
  describe("Test: App service", () => {
    it("updateMyCollectionList", () => {
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
        .spyOn(mockAppService, "updateMyCollectionList")
        .mockReturnValue(response);
      expect(mockAppService.updateMyCollectionList()).toBe(response);
      expect(spyupdateMyCollectionList).toHaveBeenCalled();
    });
  });
});
