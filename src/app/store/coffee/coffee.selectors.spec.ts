import {
  selectCoffeeIds,
  selectCoffeeIsLoading,
  selectCoffeeSearchPage,
  selectCoffeeState,
  selectCoffeesTotalCount,
  selectCurrentCoffee,
} from './coffee.selectors';
import { Coffee } from './models';

import * as fromCoffee from './coffee.reducer';

describe('Coffee Selectors', () => {
  const fakeCoffee: Coffee = {
    id: '1',
    uid: '339d0629-0f73-4886-8a12-b0be8007895a',
    blend_name: 'Café Level',
    origin: 'origin',
    variety: 'Ennarea',
    intensifier: 'balanced',
    notes: 'notes here',
  };

  const initialState: fromCoffee.State = {
    ids: [fakeCoffee.id],
    entities: {
      '1': fakeCoffee,
    },
    totalCount: 50,
    searchPage: 1,
    selectedCoffeeId: '3191',
    isLoading: false,
  };

  it('should select the coffee state', () => {
    const result = selectCoffeeState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select the coffee ids', () => {
    const result = selectCoffeeIds.projector(initialState, initialState.ids);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(fakeCoffee.id);
  });

  it('should select the selected coffee', () => {
    const result = selectCurrentCoffee.projector(
      initialState.entities,
      fakeCoffee.id
    );
    expect(result).toEqual(fakeCoffee);
  });

  it('should select if it is loading the coffee entity state', () => {
    const result = selectCoffeeIsLoading.projector(initialState);
    expect(result).toEqual(initialState.isLoading);
  });

  it('should select the total count of coffees', () => {
    const result = selectCoffeesTotalCount.projector(initialState);
    expect(result).toEqual(initialState.totalCount);
  });

  it('should select the current page in the list of coffee grid', () => {
    const result = selectCoffeeSearchPage.projector(initialState);
    expect(result).toEqual(initialState.searchPage);
  });

  // the same as above selectors tests could be continued...
});
