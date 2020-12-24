import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HeaderComponent } from './header/header.component';
import { RingsComponent } from './rings/rings.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RingsComponent
    ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RingsComponent
  ]
})
export class SharedModule { }
