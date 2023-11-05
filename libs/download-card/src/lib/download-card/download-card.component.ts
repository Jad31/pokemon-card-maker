import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pokemon-card-maker-download-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadCardComponent {
  captureAndDownload() {
    const div = document.getElementById('pokemon-card');
    if (div) {
      html2canvas(div).then((canvas) => {
        // Once the div is captured, call the function to download the canvas as an image
        this.downloadCanvasAsImage(canvas);
      });
    }
  }

  downloadCanvasAsImage(canvas: HTMLCanvasElement) {
    const imgURL = canvas.toDataURL('image/png');

    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = imgURL;
    downloadLink.download = 'pokemon-card.png';

    // Append to document and click (this will download the image)
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the anchor element after download is triggered
    document.body.removeChild(downloadLink);
  }
}
