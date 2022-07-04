import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoffeeEffects } from './coffee.effects';

describe('CoffeeEffects', () => {
  let actions$: Observable<any>;
  let effects: CoffeeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoffeeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CoffeeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
