import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NgOptimizedImage,
  NgForOf,
  NgIf,
  NgClass,
  LowerCasePipe,
} from '@angular/common';
import { DownloadCardComponent } from '@pokemon-card-maker/download-card';
import { FormComponent, FormService } from '@pokemon-card-maker/form';
import { ResizeTextDirective } from '@pokemon-card-maker/resize-text';

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
    ResizeTextDirective,
  ],
  selector: 'pokemon-card-maker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  formService = inject(FormService);
}
