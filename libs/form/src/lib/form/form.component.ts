import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
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

@Component({
  selector: 'team-booster-pack-form',
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
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  formService = inject(FormService);
  step = 0;
  imageUrl = '';

  sanitizer = inject(DomSanitizer);

  imageChangedEvent: any = '';
  croppedImage: any = '';

  changeCardType(type: 'light' | 'dark') {
    this.formService.type.set(type);
    this.formService.type() === 'dark'
      ? this.formService.iconType.set('light')
      : this.formService.iconType.set('dark');
    console.log({
      type,
      iconType: this.formService.iconType(),
      formServiceType: this.formService.type(),
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
      this.formService.characterImage.set(this.croppedImage);
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
    if (this.formService.abilityOneCost().length < 4) {
      this.formService.abilityOneCost.update((abilityOneCost) => {
        abilityOneCost.push(cost);
        return abilityOneCost;
      });
    }
  }

  remAveabilityOneCost(cost: string) {
    this.formService.abilityOneCost.update((abilityOneCost) => {
      return abilityOneCost.filter((abilityCost) => {
        return abilityCost !== cost;
      });
    });
  }

  addAbilityTwoCost(cost: string) {
    if (this.formService.abilityTwoCost().length < 4) {
      this.formService.abilityTwoCost.update((abilityTwoCost) => {
        abilityTwoCost.push(cost);
        return abilityTwoCost;
      });
    }
  }

  remAveabilityTwoCost(cost: string) {
    this.formService.abilityTwoCost.update((abilityTwoCost) => {
      return abilityTwoCost.filter((abilityCost) => {
        return abilityCost !== cost;
      });
    });
  }
}
