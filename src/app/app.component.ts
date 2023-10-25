import { Component, effect, inject } from '@angular/core';
import { NgOptimizedImage, NgForOf, NgIf, NgClass } from '@angular/common';
import { DownloadCardComponent } from '@team-booster-pack/download-card';
import { CardForm, FormComponent, FormService } from '@team-booster-pack/form';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormComponent,
    DownloadCardComponent,
    NgForOf,
    NgIf,
    NgClass,
  ],
  selector: 'team-booster-pack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formService = inject(FormService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  // constructor() {
  //   this.activatedRoute.queryParams.subscribe((params) => {
  //     this.formService.formDatas = { ...params['keys'], ...params };
  //     console.log({ formDatas: this.formService.formDatas });
  //   });
  //   effect(() => {
  //     this.router.navigate([], {
  //       queryParams: {
  //         name: this.formService.name(),
  //         type: this.formService.type(),
  //         stage: this.formService.stage(),
  //         health: this.formService.health(),
  //         characterImage: this.formService.characterImage(),
  //         fileType: this.formService.fileType(),
  //         abilityOneName: this.formService.abilityOneName(),
  //         abilityOneDescription: this.formService.abilityOneDescription(),
  //         abilityOneCost: this.formService.abilityOneCost(),
  //         abilityOneDamage: this.formService.abilityOneDamage(),
  //         abilityTwoName: this.formService.abilityTwoName(),
  //         abilityTwoDescription: this.formService.abilityTwoDescription(),
  //         abilityTwoCost: this.formService.abilityTwoCost(),
  //         abilityTwoDamage: this.formService.abilityTwoDamage(),
  //         location: this.formService.location(),
  //         workEnvironment: this.formService.workEnvironment(),
  //         availability: this.formService.availability(),
  //         upperText: this.formService.upperText(),
  //         lowerText: this.formService.lowerText(),
  //         illustrator: this.formService.illustrator(),
  //         company: this.formService.company(),
  //         cardNumber: this.formService.cardNumber(),
  //       },
  //     });
  //   });
  // }
}
