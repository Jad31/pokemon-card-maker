import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import html2canvas from 'html2canvas';

@Component({
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  selector: 'team-booster-pack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'team-booster-pack';
  rarity = 'basic';
  name = 'Jad';
  health = 100;
  characterMeta = 'Frontend Developer and DevOps';

  captureAndDownload() {
    const div = document.getElementById('pokemon-card');
    if (div) {
      html2canvas(div).then(canvas => {
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
