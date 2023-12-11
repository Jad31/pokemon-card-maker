import {
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@pokemon-card-maker/card';
import { FormComponent } from '@pokemon-card-maker/form';
import { HeaderComponent } from '@pokemon-card-maker/header';
import { ResizeTextDirective } from '@pokemon-card-maker/resize-text';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormComponent,
    NgForOf,
    NgIf,
    NgClass,
    LowerCasePipe,
    ResizeTextDirective,
    HeaderComponent,
    CardComponent,
    JsonPipe,
  ],
  selector: 'pokemon-card-maker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
