import { CartComponent } from "./cart.component";

describe("CartComponent", () => {
  let fixture: CartComponent;
  let mockAppService: any;

  beforeEach(() => {
    mockAppService = {
      updateCartLength: jest.fn(),
    };
    fixture = new CartComponent(mockAppService);
  });
  describe("Test: CartComponent", () => {
    it("Cart component to be initialized", () => {
      expect(fixture).toBeTruthy();
    });
    it("Update cart length", () => {
      const mockCartLen = 1;
      const spyUpdateCartLen = jest
        .spyOn(mockAppService, "updateCartLength")
        .mockReturnValue(mockCartLen);
      expect(mockAppService.updateCartLength(mockCartLen)).toBe(mockCartLen);
      expect(spyUpdateCartLen).toHaveBeenCalledWith(mockCartLen);
    });
  });
});
