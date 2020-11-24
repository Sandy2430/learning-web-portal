import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  describe("App component", () => {
    it("App component to be initialized", () => {
      expect(fixture).toBeTruthy();
    });
  });
});

// describe("AppComponent", () => {
//   let fixture: any;
//   let component: any;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//     }).compileComponents();
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.debugElement.componentInstance;
//   }));
//   describe("Test App component", () => {
//     it("test component", () => {
//       expect(fixture).toBeTruthy();
//       fixture.detectChanges();
//       const compiled = fixture.debugElement.nativeElement;
//       const h1 = compiled.querySelector('h1');
//       expect(h1.textContent).toContain('jest-unit-testing');
//     });
//   });
// });
