import { Injectable, WritableSignal } from '@angular/core';
import { Form, formInitialState } from './form.types';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  typeOptions = ['light', 'dark'];
  iconTypeOptions = ['bashroom-light', 'bashroom-dark'];
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
  abilityCostOptions = [0, 1, 2, 3, 4];
  maxCardNumber = 120;

  formState = formInitialState;

  updateFormStateFromQueryParams(route: ActivatedRoute) {
    return route.queryParamMap.subscribe((params) => {
      // Loop through all the keys of formInitialState
      return Object.keys(formInitialState).forEach((key) => {
        const valueFromQuery = params.get(key);
        const valueToSet =
          valueFromQuery !== null
            ? valueFromQuery
            : formInitialState[key as keyof Form]();
        (
          this.formState[key as keyof Form] as WritableSignal<Form[keyof Form]>
        ).set(valueToSet);
      });
    });
  }
}
