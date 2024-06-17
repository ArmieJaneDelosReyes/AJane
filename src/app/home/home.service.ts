import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private pdfUrl = '/assets/cv.pdf'; // Adjust path based on your file location

  constructor() {}

  getPDFUrl(): string {
    return this.pdfUrl;
  }
}
