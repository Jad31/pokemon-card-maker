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
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Form,
  FormFieldChangeEventTypes,
  FormService,
} from '@pokemon-card-maker/form';
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
  sanitizer = inject(DomSanitizer);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  formFieldChange(event: FormFieldChangeEventTypes, key: keyof Form) {
    if (event instanceof Event) {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement
      ) {
        this.formService.formState[key].set(target.value as never);
        this.router.navigate([], {
          queryParams: {
            ...this.router.parseUrl(this.router.url).queryParams,
            [key]: this.formService.formState[key](),
          },
        });
      }
    }
  }
}
