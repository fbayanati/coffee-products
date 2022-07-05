import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponen } from './product-card.component';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponen],
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
  exports: [ProductCardComponen],
})
export class ProductCardModule {}
