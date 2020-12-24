import { FavoriteDesignComponent } from './favorite-design/favorite-design.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstagramComponent } from './instagram/instagram.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { VideoSectionComponent } from './video-section/video-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstagramComponent,
    MainBannerComponent,
    VideoSectionComponent,
    FavoriteDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
