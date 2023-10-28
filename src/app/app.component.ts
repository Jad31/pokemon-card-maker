import { Component, inject } from '@angular/core';
import {
  NgOptimizedImage,
  NgForOf,
  NgIf,
  NgClass,
  LowerCasePipe,
} from '@angular/common';
import { DownloadCardComponent } from '@team-booster-pack/download-card';
import { FormComponent, FormService } from '@team-booster-pack/form';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormComponent,
    DownloadCardComponent,
    NgForOf,
    NgIf,
    NgClass,
    LowerCasePipe,
  ],
  selector: 'team-booster-pack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formService = inject(FormService);
}
