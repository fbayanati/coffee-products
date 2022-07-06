import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { CoffeeService } from './api/coffee.service';

import { CoffeeEffects } from './coffee.effects';
import { Coffee } from './models';

import * as CoffeeActions from './coffee.actions';

describe('CoffeeEffects', () => {
  let actions$: Observable<any>;
  let effects: CoffeeEffects;
  let fakeCoffeeService: CoffeeService;
  let fakeRouter = {
    navigate: jasmine.createSpy('navigate').and.callFake(() => {}),
  };

  const fakeCoffee: Coffee = {
    id: '1',
    uid: '339d0629-0f73-4886-8a12-b0be8007895a',
    blend_name: 'Café Level',
    origin: 'origin',
    variety: 'Ennarea',
    intensifier: 'balanced',
    notes: 'notes here',
  };

  const expetedServiceResult = {
    totalCount: 1,
    coffees: [fakeCoffee],
    searchPage: 1,
  };

  beforeEach(() => {
    actions$ = of({ type: '[Customers Page] Get Customers' });
    fakeCoffeeService = {} as CoffeeService;

    fakeCoffeeService.coffees = jasmine
      .createSpy('coffees')
      .and.returnValue(of(expetedServiceResult));

    TestBed.configureTestingModule({
      providers: [
        CoffeeEffects,
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: fakeRouter,
        },
        {
          provide: CoffeeService,
          useValue: fakeCoffeeService,
        },
      ],
    });

    effects = TestBed.inject(CoffeeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
