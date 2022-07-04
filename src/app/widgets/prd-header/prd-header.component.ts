import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'prd-header',
  templateUrl: './prd-header.component.html',
  styleUrls: ['./prd-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrdHeaderComponent {
  constructor(router: Router) {}
}
