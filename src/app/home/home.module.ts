import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

import {
  HomeComponent,
  InstagramPostsComponent,
  VideoBannerComponent,
  FavoriteDesignComponent,
} from '.';

@NgModule({
  declarations: [
    HomeComponent,
    InstagramPostsComponent,
    VideoBannerComponent,
    FavoriteDesignComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
