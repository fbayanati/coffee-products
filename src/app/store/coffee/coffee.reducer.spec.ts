import { reducer, initialState } from './coffee.reducer';
import * as CoffeeActions from './coffee.actions';

describe('Coffee Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadCoffees action', () => {
    it('should return the previous state with isLoading property set to true', () => {
      const expectedState = {
        ...initialState,
        isLoading: true,
      };

      const action = CoffeeActions.loadCoffees();

      const result = reducer(initialState, action);

      expect(result).toEqual(expectedState);
      expect(result).not.toBe(initialState);
    });
  });

  describe('setCoffeeSearchPage action', () => {
    it('should return the previous state with searchPage property set to the expected page', () => {
      const expectedPage = 2;

      const expectedState = {
        ...initialState,
        searchPage: expectedPage,
      };

      const action = CoffeeActions.setCoffeeSearchPage({
        searchPage: expectedPage,
      });

      const result = reducer(initialState, action);

      expect(result).toEqual(expectedState);
      expect(result).not.toBe(initialState);
    });
  });

  describe('updateSelectedCoffeeId action', () => {
    it('should return the previous state with selectedCoffeeId property set to the selected coffee id', () => {
      const expectedState = {
        ...initialState,
        selectedCoffeeId: '1',
      };

      const action = CoffeeActions.updateSelectedCoffeeId({ id: '1' });

      const result = reducer(initialState, action);

      expect(result).toEqual(expectedState);
      expect(result).not.toBe(initialState);
    });
  });
});
