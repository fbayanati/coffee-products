import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Coffee } from './coffee.model';
import * as CoffeeActions from './coffee.actions';

export const coffeesFeatureKey = 'coffees';

export interface State extends EntityState<Coffee> {
  totalCount: number;
  searchPage: number;
  selectedCoffeeId: string | null;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Coffee> = createEntityAdapter<Coffee>();

export const initialState: State = adapter.getInitialState({
  totalCount: 0,
  searchPage: 0,
  selectedCoffeeId: null,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,
  on(CoffeeActions.addCoffee, (state, action) =>
    adapter.addOne(action.coffee, state)
  ),
  on(CoffeeActions.upsertCoffee, (state, action) =>
    adapter.upsertOne(action.coffee, state)
  ),
  on(CoffeeActions.addCoffees, (state, action) =>
    adapter.addMany(action.coffees, state)
  ),
  on(CoffeeActions.upsertCoffees, (state, action) =>
    adapter.upsertMany(action.coffees, state)
  ),
  on(CoffeeActions.updateCoffee, (state, action) =>
    adapter.updateOne(action.coffee, state)
  ),
  on(CoffeeActions.updateCoffees, (state, action) =>
    adapter.updateMany(action.coffees, state)
  ),
  on(CoffeeActions.deleteCoffee, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(CoffeeActions.deleteCoffees, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(CoffeeActions.loadCoffees, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(CoffeeActions.loadCoffeesSuccess, (state, action) => {
    const updatedState = action.coffees?.length
      ? adapter.setAll(action.coffees, state)
      : adapter.removeAll(state);

    return {
      ...updatedState,
      totalCount: action.totalCount,
      searchPage: action.searchPage,
      isLoading: false,
    };
  }),
  on(CoffeeActions.loadCoffeesFailure, (state) => {
    const updatedState = adapter.removeAll(state);
    return {
      ...updatedState,
      totalCount: 0,
      searchPage: 0,
      isLoading: false,
    };
  }),
  on(CoffeeActions.clearCoffees, (state) => adapter.removeAll(state))
);

export const getSelectedCoffeeId = (state: State) => state.selectedCoffeeId;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of coffee ids
export const selectCofeeIds = selectIds;

// select the dictionary of coffee entities
export const selectCoffeeEntities = selectEntities;

// select the array of coffees
export const selectAllCoffees = selectAll;

// select the total coffee count
export const selectCoffeeTotal = selectTotal;
