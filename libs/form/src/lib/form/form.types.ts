import { WritableSignal, signal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export type Form = {
  name: string;
  type: 'light' | 'dark';
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

export type FormState = WritableSignalForm<Form>;

export const formInitialState: FormState = {
  name: signal<string>(''),
  type: signal<'light' | 'dark'>('light'),
  iconType: signal<string>('dark'),
  stage: signal<string>(''),
  health: signal<number>(0),
  characterImage: signal<string>(''),
  fileType: signal<string>(''),
  abilityOneName: signal<string>(''),
  abilityOneDescription: signal<string>(''),
  isAbilityOneDamageActive: signal<boolean>(true),
  abilityOneCost: signal<string[]>([]),
  abilityOneDamage: signal<number>(0),
  abilityTwoName: signal<string>(''),
  abilityTwoDescription: signal<string>(''),
  abilityTwoCost: signal<string[]>([]),
  abilityTwoDamage: signal<number>(0),
  location: signal<string>(''),
  workEnvironment: signal<string>(''),
  availability: signal<string>(''),
  upperText: signal<string>(''),
  lowerText: signal<string>(''),
  illustrator: signal<string>(''),
  company: signal<string>(''),
  cardNumber: signal<number>(0),
};

export type FormFieldChangeEventTypes = Event | MatCheckboxChange | InputEvent