import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';
import { CommonModule, DecimalPipe, NgFor, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormService } from './form.service';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ImageCroppedEvent,
  ImageCropperModule,
  LoadedImage,
} from 'ngx-image-cropper';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { Router, ActivatedRoute } from '@angular/router';
import { Form, FormFieldChangeEventTypes } from './form.types';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';

@Component({
  selector: 'pokemon-card-maker-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    ImageCropperModule,
    NgxMatFileInputModule,
    NgFor,
    NgOptimizedImage,
    DecimalPipe,
    MatCheckboxModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  formService = inject(FormService);
  sanitizer = inject(DomSanitizer);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  step = 0;
  imageUrl = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {
    this.formService.updateFormStateFromQueryParams(this.activatedRoute);
  }

  formFieldChange(event: FormFieldChangeEventTypes, key: keyof Form) {
    if (event instanceof Event) {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        this.formService.formState[key].set(target.value as never);
        this.router.navigate([], {
          queryParams: {
            ...this.router.parseUrl(this.router.url).queryParams,
            [key]: this.formService.formState[key](),
          },
        });
      }
    } else if (event instanceof MatCheckboxChange) {
      this.formService.formState[key].set(event.checked as never);
      this.router.navigate([], {
        queryParams: {
          ...this.router.parseUrl(this.router.url).queryParams,
          [key]: this.formService.formState[key](),
        },
      });
    }
  }

  changeCardType(type: 'light' | 'dark') {
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

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

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
