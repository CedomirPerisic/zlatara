import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'collections/:collection',
    loadChildren: () =>
      import('./collection/collection.module').then(
        (module) => module.CollectionModule
      ),
  },
  {
    path: 'products/:product',
    loadChildren: () =>
      import('./product/product.module').then((module) => module.ProductModule),
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./cms/cms.module').then((module) => module.CmsModule),
    canActivate: [],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
