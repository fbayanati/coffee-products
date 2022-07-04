import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Coffee } from './coffee.model';
import { MapStateCoffees } from './models';

export const loadCoffees = createAction('[Coffee/API] Load Coffees');

export const loadCoffeesSuccess = createAction(
  '[Coffee/API] Load Coffees Success',
  props<MapStateCoffees>()
);

export const loadCoffeesFailure = createAction(
  '[Coffee/API] Load Coffees Failure'
);

export const addCoffee = createAction(
  '[Coffee/API] Add Coffee',
  props<{ coffee: Coffee }>()
);

export const upsertCoffee = createAction(
  '[Coffee/API] Upsert Coffee',
  props<{ coffee: Coffee }>()
);

export const addCoffees = createAction(
  '[Coffee/API] Add Coffees',
  props<{ coffees: Coffee[] }>()
);

export const upsertCoffees = createAction(
  '[Coffee/API] Upsert Coffees',
  props<{ coffees: Coffee[] }>()
);

export const updateCoffee = createAction(
  '[Coffee/API] Update Coffee',
  props<{ coffee: Update<Coffee> }>()
);

export const updateCoffees = createAction(
  '[Coffee/API] Update Coffees',
  props<{ coffees: Update<Coffee>[] }>()
);

export const deleteCoffee = createAction(
  '[Coffee/API] Delete Coffee',
  props<{ id: string }>()
);

export const deleteCoffees = createAction(
  '[Coffee/API] Delete Coffees',
  props<{ ids: string[] }>()
);

export const clearCoffees = createAction('[Coffee/API] Clear Coffees');
