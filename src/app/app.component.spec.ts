import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
    fixture.ngOnInit();
  });
  describe("App component", () => {
    test("App component to be initialized", () => {
      expect(fixture).toBeTruthy();
    });
  });
});
