import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  typeOptions: string[] = ['Light', 'Dark'];
  formAbilityOneCost = 0;
  formAbilityTwoCost = 0;
  abilityCostOptions: number[] = [0, 1, 2, 3, 4];
  maxCardNumber = 120;

  name = signal<string>('Jad');
  type = signal<string>('Light');
  stage = signal<string>('Basic');
  health = signal<number>(100);
  abilityOneName = signal<string>('Ability Name');
  abilityOneDescription = signal<string>('Description');
  abilityOneCost = signal<number>(this.formAbilityOneCost);
  abilityOneDamage = signal<number>(0);
  abilityTwoName = signal<string>('Ability Name');
  abilityTwoDescription = signal<string>('Description');
  abilityTwoCost = signal<number>(this.formAbilityTwoCost);
  abilityTwoDamage = signal<number>(0);
  weakness = signal<string>('To good');
  resistance = signal<string>('Pressure');
  retreat = signal<string>("I don't know");
  upperText = signal<string>('Upper Text');
  lowerText = signal<string>('Lower Text');
  illustrator = signal<string>('Illustrator');
  company = signal<string>('Company');
  cardNumber = signal<number>(1);
}
