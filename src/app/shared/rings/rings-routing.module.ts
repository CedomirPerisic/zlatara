import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RingsComponent } from './rings.component';

const routes: Routes = [
  {
    path: '',
    component: RingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RingsRoutingModule { }
