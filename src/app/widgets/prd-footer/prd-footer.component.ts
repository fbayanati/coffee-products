import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prd-footer',
  templateUrl: './prd-footer.component.html',
  styleUrls: ['./prd-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrdFooterComponent {
  currentYear = () => new Date().getFullYear();
}
