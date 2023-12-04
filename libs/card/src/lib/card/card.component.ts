import {
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { FormService } from '@pokemon-card-maker/form';
import { ResizeTextDirective } from '@pokemon-card-maker/resize-text';

@Component({
  selector: 'pokemon-card-maker-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgClass,
    LowerCasePipe,
    ResizeTextDirective,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  formService = inject(FormService);
}
