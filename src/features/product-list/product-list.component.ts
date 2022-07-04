import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'prd-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
