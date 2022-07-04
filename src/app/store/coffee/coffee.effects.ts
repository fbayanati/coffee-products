import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoffeeService } from './api/coffee.service';

import * as CoffeeActions from './coffee.actions';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CoffeeEffects {
  loadCoffees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoffeeActions.loadCoffees),
      mergeMap((action) =>
        this.coffeeService.coffees().pipe(
          map(({ totalCount, coffees, searchPage }) =>
            CoffeeActions.loadCoffeesSuccess({
              totalCount,
              coffees,
              searchPage,
            })
          ),
          catchError(() => {
            this.router.navigate(['/']);
            return of(CoffeeActions.loadCoffeesFailure());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService,
    private router: Router
  ) {}
}
