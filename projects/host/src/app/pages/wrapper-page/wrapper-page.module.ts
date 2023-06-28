import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperPageRoutingModule } from './wrapper-page-routing.module';
import { WrapperPageComponent } from './wrapper-page.component';
import { CardModule } from '@shared/card/card.module';

@NgModule({
  declarations: [
    WrapperPageComponent
  ],
  imports: [
    CommonModule,
    WrapperPageRoutingModule,
    CardModule
  ]
})
export class WrapperPageModule { }
