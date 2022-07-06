import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, tap, takeUntil, Observable, Subject } from 'rxjs';
import { StoreState } from 'src/app/store';
import { Coffee } from 'src/app/store/coffee/models';

import * as CoffeeActions from '../../store/coffee/coffee.actions';
import * as CoffeeSelectors from '../../store/coffee/coffee.selectors';

@Component({
  selector: 'prd-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  coffeesForPage$: Observable<Coffee[]>;
  searchPage$: Observable<number>;
  totalPages$: Observable<number>;

  searchPage = 1;
  totalPage = 0;

  private readonly perPage = 10;

  constructor(private store: Store<StoreState>) {
    this.coffeesForPage$ = this.store.pipe(
      select(CoffeeSelectors.selectCoffeesForCurrentPage)
    );

    this.searchPage$ = this.store.pipe(
      select(CoffeeSelectors.selectCoffeeSearchPage),
      tap((searchPage) => {
        this.searchPage = searchPage;
      })
    );

    this.totalPages$ = this.store.pipe(
      select(CoffeeSelectors.selectCoffeesTotalCount),
      tap((total) => {
        this.totalPage = Math.ceil(total / this.perPage);
      }),
      map((count) => Math.ceil(count / this.perPage))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(
      CoffeeActions.setCoffeeSearchPage({ searchPage: this.searchPage })
    );

    this.store.dispatch(CoffeeActions.loadCoffees());
  }

  onFirstPage(): void {
    if (this.searchPage === 1) {
      return;
    }

    this.searchPage = 1;

    this.store.dispatch(
      CoffeeActions.setCoffeeSearchPage({ searchPage: this.searchPage })
    );
  }

  onPreviousPage(): void {
    if (this.searchPage <= 1) {
      return;
    }

    this.searchPage -= 1;

    this.store.dispatch(
      CoffeeActions.setCoffeeSearchPage({ searchPage: this.searchPage })
    );
  }

  onNextPage(): void {
    if (this.searchPage >= this.totalPage) {
      return;
    }

    this.searchPage += 1;

    this.store.dispatch(
      CoffeeActions.setCoffeeSearchPage({ searchPage: this.searchPage })
    );
  }

  onLastPage(): void {
    if (this.searchPage >= this.totalPage) {
      return;
    }

    this.searchPage = this.totalPage;

    this.store.dispatch(
      CoffeeActions.setCoffeeSearchPage({ searchPage: this.searchPage })
    );
  }

  get isFirstPageDisabled(): boolean {
    return this.searchPage === 1;
  }

  get isPreviousPageDisabled(): boolean {
    return this.searchPage === 1;
  }

  get isNextPageDisabled(): boolean {
    return this.searchPage === this.totalPage;
  }

  get isLastPageDisabled(): boolean {
    return this.searchPage === this.totalPage;
  }
}
