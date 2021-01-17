import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBannerComponent, PageNotFoundComponent } from '.';

const sharedComponents = [MainBannerComponent, PageNotFoundComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule],
  exports: [sharedComponents],
})
export class SharedModule {}
