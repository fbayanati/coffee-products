import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import pick from 'lodash/pick';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coffee, MapStateCoffees } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  readonly coffeeCountPerLoad = 50;

  constructor(private http: HttpClient) {}

  coffees(): Observable<MapStateCoffees> {
    let params = new HttpParams();
    params = params.append('size', this.coffeeCountPerLoad);

    const extractdata = (response: unknown[]): MapStateCoffees => ({
      totalCount: response.length,
      coffees: response.map(
        (item) =>
          pick(item, [
            'id',
            'uid',
            'blend_name',
            'origin',
            'variety',
            'intensifier',
            'notes',
          ]) as Coffee
      ),
      searchPage: 1,
    });

    return this.http
      .get(environment.api.usersSearch, {
        headers: new HttpHeaders({}),
        params,
      })
      .pipe(
        map((response) => extractdata(response as unknown[])),
        catchError(this.onError)
      );
  }

  onError(error: HttpErrorResponse): Observable<never> {
    window.alert(
      error.error?.message ??
        'Random data API for coffee is encountered with error'
    );
    return throwError(
      () => new Error('Random data API for coffee is failing!')
    );
  }
}
