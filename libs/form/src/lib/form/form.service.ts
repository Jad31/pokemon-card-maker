import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formAbilityOneCost = 0;
  abilityCostOptions: number[] = [0, 1, 2, 3, 4];

  name = signal<string>('Jad');
  type = signal<string>('Fire');
  stage = signal<string>('Basic');
  health = signal<number>(100);
  abilityOneName = signal<string>('Ability Name');
  abilityOneDescription = signal<string>('Description');
  abilityOneCost = signal<number>(this.formAbilityOneCost);
  abilityOneDamage = signal<string>('Description');
  abilityTwoName = signal<string>('Ability Name');
  abilityTwoDescription = signal<string>('Description');
  abilityTwoCost = signal<number>(0);
  abilityTwoDamage = signal<string>('Description');
  weakness = signal<string>('To good');
  resistance = signal<string>('Pressure');
  retreat = signal<string>("I don't know");
  upperText = signal<string>('Upper Text');
  lowerText = signal<string>('Lower Text');
  illustrator = signal<string>('Illustrator');
  company = signal<string>('Company');
}
