import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperPageComponent } from './wrapper-page.component';

const routes: Routes = [
  { path: '', component: WrapperPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrapperPageRoutingModule { }
