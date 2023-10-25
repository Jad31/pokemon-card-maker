import { Injectable, signal } from '@angular/core';
import { CardForm } from './form.types';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  typeOptions: string[] = ['Light', 'Dark'];
  formAbilityOneCost = 0;
  formAbilityTwoCost = 0;
  abilityCostOptions: number[] = [0, 1, 2, 3, 4];
  maxCardNumber = 120;

  // formDatas: CardForm = {};

  name = signal<string>('');
  type = signal<string>('');
  stage = signal<string>('');
  health = signal<number>(0);
  characterImage = signal<string>('');
  fileType = signal<string>('');
  abilityOneName = signal<string>('');
  abilityOneDescription = signal<string>('');
  abilityOneCost = signal<number>(this.formAbilityOneCost);
  abilityOneDamage = signal<number>(0);
  abilityTwoName = signal<string>('');
  abilityTwoDescription = signal<string>('');
  abilityTwoCost = signal<number>(this.formAbilityTwoCost);
  abilityTwoDamage = signal<number>(0);
  location = signal<string>('');
  workEnvironment = signal<string>('');
  availability = signal<string>('');
  upperText = signal<string>('');
  lowerText = signal<string>('');
  illustrator = signal<string>('');
  company = signal<string>('');
  cardNumber = signal<number>(0);
}
