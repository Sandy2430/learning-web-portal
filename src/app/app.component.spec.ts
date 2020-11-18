import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  describe('App component', () => {
    it('App component to be initialized', () => {
      expect(fixture).toBeTruthy();
    });
    it('Addition of two numbers', () => {
      expect(fixture.addNumbers(1)).toBe(2);
    });
  });
});
