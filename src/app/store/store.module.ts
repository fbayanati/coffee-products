import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeStoreModule } from './coffee/coffee-store.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, CoffeeStoreModule],
})
export class PrdStoreModule {}
