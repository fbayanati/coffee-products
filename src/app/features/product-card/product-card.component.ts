import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Coffee } from 'src/app/store/coffee/models';

@Component({
  selector: 'prd-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() coffee: Coffee | undefined;
  @Input() isBackToProducts: boolean = false;

  get isNavigateToProductDetails() {
    return !this.isBackToProducts;
  }
}
