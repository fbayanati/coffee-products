import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./features/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
