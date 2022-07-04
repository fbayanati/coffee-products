import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCoffee from './coffee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './coffee.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCoffee.coffeesFeatureKey, fromCoffee.reducer),
    EffectsModule.forFeature([CoffeeEffects]),
  ],
})
export class CoffeeStoreModule {}
