import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { StoreState } from 'src/app/store';
import { Coffee } from 'src/app/store/coffee/models';

import * as CoffeeActions from '../../store/coffee/coffee.actions';
import * as CoffeeSelectors from '../../store/coffee/coffee.selectors';
import * as RouterSelectors from '../../store/router-store';

@Component({
  selector: 'prd-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  urlRoute$: Observable<string>;
  coffee$: Observable<Coffee | undefined>;

  constructor(private store: Store<StoreState>, private route: ActivatedRoute) {
    this.urlRoute$ = this.store.pipe(select(RouterSelectors.selectUrl));

    this.coffee$ = this.store.pipe(
      select(CoffeeSelectors.selectCurrentCoffee),
      map((coffee) => (!!coffee ? coffee : undefined))
    );
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.store.dispatch(CoffeeActions.updateSelectedCoffeeId({ id }));
  }
}
