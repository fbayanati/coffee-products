import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromCoffee from './coffee.reducer';

export interface State {
  coffees: fromCoffee.State;
}

export const reducers: ActionReducerMap<State> = {
  coffees: fromCoffee.reducer,
};

export const selectCoffeeState =
  createFeatureSelector<fromCoffee.State>('coffees');

export const selectCoffeeIds = createSelector(
  selectCoffeeState,
  fromCoffee.selectCofeeIds // shorthand for coffeesState => fromCoffee.selectCoffeeIds(coffeesState)
);
export const selectCoffeeEntities = createSelector(
  selectCoffeeState,
  fromCoffee.selectCoffeeEntities
);
export const selectAllCoffees = createSelector(
  selectCoffeeState,
  fromCoffee.selectAllCoffees
);
export const selectCoffeeTotal = createSelector(
  selectCoffeeState,
  fromCoffee.selectCoffeeTotal
);
export const selectCurrentCoffeeId = createSelector(
  selectCoffeeState,
  fromCoffee.getSelectedCoffeeId
);

export const selectCurrentCoffee = createSelector(
  selectCoffeeEntities,
  selectCurrentCoffeeId,
  (coffeeEntities, coffeeId) => coffeeId && coffeeEntities[coffeeId]
);

export const selectCoffeeIsLoading = createSelector(
  selectCoffeeState,
  (state) => state.isLoading
);

export const selectCoffeesTotalCount = createSelector(
  selectCoffeeState,
  (state) => state.totalCount
);

export const selectCoffeeSearchPage = createSelector(
  selectCoffeeState,
  (state) => state.searchPage
);
