import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ProductCardModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
