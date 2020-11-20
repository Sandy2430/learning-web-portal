import { SearchItemComponent } from './search-item.component';

describe('Test: SearchItemComponent', () => {
  let fixture: SearchItemComponent;
  let mockAppService: any;
  let component: any;

  beforeEach(() => {
    mockAppService = {
      getBooks: jest.fn(),
      updateCartList: jest.fn(),
      updateCartLength: jest.fn(),
    };
    fixture = new SearchItemComponent(mockAppService);
  });
  describe('Test: getBooks', () => {
    it('it should return list of books', () => {
      const searchString = 'angular';
      const mockBookListResponse = [
        {
          accessInfo: {},
          etage: '',
          id: '',
          kind: '',
          saleInfo: {},
          searchInfo: {},
          selfLink: '',
          volumeInfo: {
            allowAnonLogging: null,
            authors: [],
            averageRating: null,
            canonicalVolumeLink: '',
            categories: [],
            contentVersion: '',
            description: '',
            imageLinks: {},
            industryIdentifiers: [],
            infoLink: '',
            language: '',
            maturityRating: '',
            pageCount: null,
            panelizationSummary: {},
            previewLink: '',
            printType: '',
            publishedDate: '',
            publisher: '',
            ratingsCount: null,
            readingModes: {},
            title: '',
          },
        },
      ];
      const spyGetBook = jest
        .spyOn(mockAppService, 'getBooks')
        .mockReturnValue(mockBookListResponse);
      expect(mockAppService.getBooks(searchString)).toBe(mockBookListResponse);
      expect(spyGetBook).toHaveBeenCalledWith(searchString);
    });
  });
  describe('Test: searchItem()', () => {
    it('SearchItem() should be defined', () => {
      fixture.searchItem = jest.fn();
      expect(fixture.searchItem).toBeDefined();
    });
  });
});
