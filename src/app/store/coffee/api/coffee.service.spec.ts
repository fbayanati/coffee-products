import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Coffee } from '../models';

import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: CoffeeService;

  const fakeCoffee: Coffee = {
    id: '1',
    uid: '339d0629-0f73-4886-8a12-b0be8007895a',
    blend_name: 'Café Level',
    origin: 'origin',
    variety: 'Ennarea',
    intensifier: 'balanced',
    notes: 'notes here',
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoffeeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected coffees (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([fakeCoffee]));

    const expetedCoffees = {
      totalCount: 1,
      coffees: [fakeCoffee],
      searchPage: 1,
    };

    service.coffees().subscribe({
      next: (coffees) => {
        expect(coffees).withContext('expected coffees').toEqual(expetedCoffees);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorMessage = 'Random data API for coffee is failing!';

    const errorResponse = new HttpErrorResponse({
      error: errorMessage,
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    service.coffees().subscribe({
      next: (coffees) => done.fail('expected an error, not heroes'),
      error: (error) => {
        expect(error.message).toContain(errorMessage);
        done();
      },
    });
  });
});
