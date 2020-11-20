export interface BookList {
    accessInfo: AccessInfo;
    etage: string;
    id: string;
    kind: string;
    saleInfo: SaleInfo;
    searchInfo: SearchInfo;
    selfLink: string;
    volumeInfo: VolumeInfo;
}
export interface VolumeInfo {
    allowAnonLogging: boolean;
    averageRating: number;
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    authors: string[];
    description: string;
    publishedDate: string;
    publisher: string;
    subtitle?: string;
    title: string;
    imageLinks: ImageLinks;
    industryIdentifiers: IndustryIdentifiers[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: PanelizationSummary;
    previewLink: string;
    printType: string;
    ratingsCount: number;
    readingModes: ReadingModes;
    userName?: string;
    userEmail?: string;
    phoneNumber?: string;
    address?: string;

}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}
export interface IndustryIdentifiers {
    identifier: string;
    type: string;
}
export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}
export interface ReadingModes {
    image: boolean;
    text: boolean;
}
export interface AccessInfo {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: Epub;
    pdf: Pdf;
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
}
export interface Epub {
    isAvailable: boolean;
}
export interface Pdf {
    acsTokenLink: string;
    isAvailable: boolean;
}
export interface SaleInfo {
    country: string;
    isEbook: boolean;
    saleability: string;
}
export interface SearchInfo {
    textSnippet: string;
}
