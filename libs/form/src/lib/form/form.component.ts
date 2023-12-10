import {
  CommonModule,
  DecimalPipe,
  NgFor,
  NgOptimizedImage,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadCardComponent } from '@pokemon-card-maker/download-card';
import { Store } from '@pokemon-card-maker/store';
import {
  ImageCroppedEvent,
  ImageCropperModule,
  LoadedImage,
} from 'ngx-image-cropper';
import { FormService } from './form.service';
import { Form, FormFieldChangeEventTypes } from './form.types';

@Component({
  selector: 'pokemon-card-maker-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
    NgFor,
    NgOptimizedImage,
    DecimalPipe,
    DownloadCardComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  formService = inject(FormService);
  store = inject(Store);
  sanitizer = inject(DomSanitizer);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  step = 0;
  imageUrl = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageChangedEvent: any = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  croppedImage: any = '';

  constructor() {
    this.store.updateFormStateFromQueryParams(this.activatedRoute);
    this.formService.updateFormStateFromQueryParams(this.activatedRoute);
  }

  formFieldChange(event: FormFieldChangeEventTypes, key: keyof Form) {
    if (event instanceof Event) {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement
      ) {
        this.store.updateState(key, target.value as never);
        this.router.navigate([], {
          queryParams: {
            ...this.router.parseUrl(this.router.url).queryParams,
            [key]: this.store[key](),
          },
        });
      }
    }
  }

  changeCardType(type: string) {
    console.log('changeCardType', type);
    if (type !== 'light' && type !== 'dark') {
      console.error('Invalid type value:', type);
      return;
    }
    this.formService.formState.type.set(type);
    this.formService.formState.type() === 'dark'
      ? this.formService.formState.iconType.set('light')
      : this.formService.formState.iconType.set('dark');
    this.router.navigate([], {
      queryParams: {
        ...this.router.parseUrl(this.router.url).queryParams,

        type: this.formService.formState['type'](),
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fileChangeEvent(event: any): void {
    if (event) {
      this.imageChangedEvent = event;
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    if (event && event.objectUrl) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustResourceUrl(
        event.objectUrl
      );
      this.formService.formState.characterImage.set(this.croppedImage);
      // event.blob can be used to upload the cropped image
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    console.log('Image failed to load ');
  }

  addAbilityOneCost(cost: string) {
    if (this.formService.formState.abilityOneCost().length < 4) {
      this.formService.formState.abilityOneCost.update((abilityOneCost) => {
        abilityOneCost.push(cost);
        return abilityOneCost;
      });
      this.router.navigate([], {
        queryParams: {
          ...this.router.parseUrl(this.router.url).queryParams,
          'abilityOneCost[]': this.formService.formState
            .abilityOneCost()
            .toString(),
        },
      });
    }
  }

  removeAbilityOneCost(index: number) {
    this.formService.formState.abilityOneCost.update((abilityOneCost) => {
      abilityOneCost.splice(index, 1);
      return abilityOneCost;
    });
    this.router.navigate([], {
      queryParams: {
        ...this.router.parseUrl(this.router.url).queryParams,
        'abilityOneCost[]': this.formService.formState
          .abilityOneCost()
          .toString(),
      },
    });
  }

  addAbilityTwoCost(cost: string) {
    if (this.formService.formState.abilityTwoCost().length < 4) {
      this.formService.formState.abilityTwoCost.update((abilityTwoCost) => {
        abilityTwoCost.push(cost);
        return abilityTwoCost;
      });
      this.router.navigate([], {
        queryParams: {
          ...this.router.parseUrl(this.router.url).queryParams,
          'abilityTwoCost[]': this.formService.formState.abilityTwoCost(),
        },
      });
    }
  }

  removeAbilityTwoCost(index: number) {
    this.formService.formState.abilityTwoCost.update((abilityTwoCost) => {
      abilityTwoCost.splice(index, 1);
      return abilityTwoCost;
    });
    this.router.navigate([], {
      queryParams: {
        ...this.router.parseUrl(this.router.url).queryParams,
        'abilityTwoCost[]': this.formService.formState.abilityTwoCost(),
      },
    });
  }
}
