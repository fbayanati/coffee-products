import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  fetchedCoffees$: Observable<Coffee[]>;

  constructor(private store: Store<StoreState>, private router: Router) {
    this.fetchedCoffees$ = this.store.pipe(
      select(CoffeeSelectors.selectAllCoffees)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(CoffeeActions.loadCoffees());
  }
}
