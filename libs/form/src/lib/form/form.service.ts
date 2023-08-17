import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  name = signal<string>('Jad');
  type = signal<string>('Fire');
  stage = signal<string>('Basic');
  health = signal<string>('100');
  abilityOneName = signal<string>('Ability Name');
  abilityOneDescription = signal<string>('Description');
  abilityOneCost = signal<string>('Description');
  abilityOneDamage = signal<string>('Description');
  abilityTwoName = signal<string>('Ability Name');
  abilityTwoDescription = signal<string>('Description');
  abilityTwoCost = signal<string>('Description');
  abilityTwoDamage = signal<string>('Description');
  weakness = signal<string>('To good');
  resistance = signal<string>('Pressure');
  retreat = signal<string>("I don't know");
  upperText = signal<string>('Upper Text');
  lowerText = signal<string>('Lower Text');
  illustrator = signal<string>('Illustrator');
  company = signal<string>('Company');
}
