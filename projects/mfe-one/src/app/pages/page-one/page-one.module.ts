import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import { CardModule } from '@shared/card/card.module';


@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    CardModule
  ]
})
export class PageOneModule { }
