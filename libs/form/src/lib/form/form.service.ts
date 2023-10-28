import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  typeOptions: string[] = ['light', 'dark'];
  iconTypeOptions: string[] = ['bashroom-light', 'bashroom-dark'];
  abilityTypeCostOptions = [
    'bashroom-light',
    'bashroom-dark',
    'angular',
    'nx',
    'ngrx',
    'oss-initiative',
    'nestjs',
    'rust',
    'google-cloud',
    'kubernetes',
    'git',
  ];
  abilityCostOptions: number[] = [0, 1, 2, 3, 4];
  maxCardNumber = 120;

  name = signal<string>('');
  type = signal<'light' | 'dark' | ''>('');
  iconType = signal<string>('');
  stage = signal<string>('');
  health = signal<number>(0);
  characterImage = signal<string>('');
  fileType = signal<string>('');
  abilityOneName = signal<string>('');
  abilityOneDescription = signal<string>('');
  abilityOneCost = signal<string[]>([]);
  abilityOneDamage = signal<number>(0);
  abilityTwoName = signal<string>('');
  abilityTwoDescription = signal<string>('');
  abilityTwoCost = signal<string[]>([]);
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
