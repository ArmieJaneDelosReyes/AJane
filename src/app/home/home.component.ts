import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private pdfService: HomeService) {}

  downloadPDF(): void {
    const pdfUrl = this.pdfService.getPDFUrl();
    fetch(pdfUrl)
      .then((res) => res.blob())
      .then((blob) => {
        saveAs(blob, 'downloaded.pdf');
      })
      .catch((error) => {
        console.error('Download failed', error);
      });
  }
}
