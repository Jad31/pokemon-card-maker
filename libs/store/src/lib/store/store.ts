import { ActivatedRoute } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Form } from './store.types';

export const formInitialState: Form = {
  name: '',
  type: 'light',
  iconType: 'dark',
  stage: '',
  health: 0,
  characterImage: '',
  fileType: '',
  abilityOneName: '',
  abilityOneDescription: '',
  isAbilityOneDamageActive: true,
  abilityOneCost: [],
  abilityOneDamage: 0,
  abilityTwoName: '',
  abilityTwoDescription: '',
  abilityTwoCost: [],
  abilityTwoDamage: 0,
  location: '',
  workEnvironment: '',
  availability: '',
  upperText: '',
  lowerText: '',
  illustrator: '',
  company: '',
  cardNumber: 0,
};

export const Store = signalStore(
  { providedIn: 'root' },
  withState<Form>(formInitialState),
  withMethods(({ ...store }) => ({
    updateFormStateFromQueryParams(route: ActivatedRoute) {
      console.log('updateFormStateFromQueryParams from store');
      return route.queryParamMap.subscribe((params) => {
        // Loop through all the keys of formInitialState
        return Object.keys(formInitialState).forEach((key) => {
          const valueFromQuery = params.get(key);
          const valueToSet =
            valueFromQuery !== null
              ? valueFromQuery
              : formInitialState[key as keyof Form];
          patchState(store, { [key]: valueToSet });
        });
      });
    },
    updateState(key: keyof Form, value: Form[keyof Form]) {
      patchState(store, { [key]: value });
    },
  }))
);
