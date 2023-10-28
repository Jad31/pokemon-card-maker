import { WritableSignal, signal } from '@angular/core';

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

export type FormState = {
  name: WritableSignal<string>;
  type: WritableSignal<'light' | 'dark'>;
  iconType: WritableSignal<string>;
  stage: WritableSignal<string>;
  health: WritableSignal<number>;
  characterImage: WritableSignal<string>;
  fileType: WritableSignal<string>;
  abilityOneName: WritableSignal<string>;
  abilityOneDescription: WritableSignal<string>;
  abilityOneCost: WritableSignal<string[]>;
  abilityOneDamage: WritableSignal<number>;
  abilityTwoName: WritableSignal<string>;
  abilityTwoDescription: WritableSignal<string>;
  abilityTwoCost: WritableSignal<string[]>;
  abilityTwoDamage: WritableSignal<number>;
  location: WritableSignal<string>;
  workEnvironment: WritableSignal<string>;
  availability: WritableSignal<string>;
  upperText: WritableSignal<string>;
  lowerText: WritableSignal<string>;
  illustrator: WritableSignal<string>;
  company: WritableSignal<string>;
  cardNumber: WritableSignal<number>;
};

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
