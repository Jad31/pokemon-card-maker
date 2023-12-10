import { WritableSignal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export type Form = {
  name: string;
  type: TypeOptions;
  iconType: string;
  stage: string;
  health: number;
  characterImage: string;
  fileType: string;
  abilityOneName: string;
  abilityOneDescription: string;
  abilityOneCost: string[];
  isAbilityOneDamageActive: boolean;
  abilityOneDamage: number;
  abilityTwoName: string;
  abilityTwoDescription: string;
  abilityTwoCost: string[];
  abilityTwoDamage: number;
  location: string;
  workEnvironment: string;
  availability: string;
  upperText: string;
  lowerText: string;
  illustrator: string;
  company: string;
  cardNumber: number;
};

export type WritableSignalForm<T> = {
  [P in keyof T]: WritableSignal<T[P]>;
};

export type TypeOptions = 'light' | 'dark';

export type FormState = WritableSignalForm<Form>;

export type FormFieldChangeEventTypes = Event | MatCheckboxChange | InputEvent;
