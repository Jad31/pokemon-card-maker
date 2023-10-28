import { Injectable, WritableSignal } from '@angular/core';
import { Form, FormState, formInitialState } from './form.types';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

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

  formState = formInitialState;

  isKeyOfFormState(key: string): boolean {
    return key in formInitialState;
  }
  updateFormStateFromQueryParams(route: ActivatedRoute) {
    return route.queryParamMap.subscribe((params) => {
      // Loop through all the keys of formInitialState
      return Object.keys(formInitialState).forEach((key) => {
        if (this.isKeyOfFormState(key)) {
          const valueFromQuery = params.get(key);
          const valueToSet =
            valueFromQuery !== null && valueFromQuery !== undefined
              ? valueFromQuery
              : formInitialState[key as keyof Form]();
          (
            this.formState[key as keyof Form] as WritableSignal<
              string | number | string[]
            >
          ).set(valueToSet);
        }
      });
    });
  }
}
