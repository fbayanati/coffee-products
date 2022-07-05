import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, ProductCardModule],
})
export class ProductDetailModule {}
