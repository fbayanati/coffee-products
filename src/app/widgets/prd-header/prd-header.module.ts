import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrdHeaderComponent } from './prd-header.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrdHeaderComponent],
  imports: [CommonModule, MatButtonToggleModule, RouterModule],
  exports: [PrdHeaderComponent],
})
export class PrdHeaderModule {}
