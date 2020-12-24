import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InstagramComponent } from './instagram/instagram.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { FavoriteDesignComponent } from './favorite-design/favorite-design.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'video-section',
    component: VideoSectionComponent
  },
  {
    path: 'favorite-design',
    component: FavoriteDesignComponent
  },
  {
    path: 'main-banner',
    component: MainBannerComponent
  },
  {
    path: 'instagram',
    component: InstagramComponent
  },
  {
    path: 'header',
    loadChildren: () => import('./shared/header/header.module')
      .then( module => module.HeaderModule),
  },
  {
    path: 'footer',
    loadChildren: () => import('./shared/footer/footer.module')
      .then( module => module.FooterModule),
  },
  {
    path: 'rings',
    loadChildren: () => import('./shared/rings/rings.module')
      .then( module => module.RingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
