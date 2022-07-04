import { coffeesFeatureKey, State } from '../coffee.reducer';

export interface WithCoffeeState {
  [coffeesFeatureKey]: State;
}
