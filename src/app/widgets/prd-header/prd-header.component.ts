import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prd-header',
  templateUrl: './prd-header.component.html',
  styleUrls: ['./prd-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrdHeaderComponent {}
