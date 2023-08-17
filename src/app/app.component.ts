import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DownloadCardComponent } from '@team-booster-pack/download-card';
import { FormComponent, FormService } from '@team-booster-pack/form';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, FormComponent, DownloadCardComponent],
  selector: 'team-booster-pack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formService = inject(FormService);
}
