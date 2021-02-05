import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aa16Page } from './aa16.page';

const routes: Routes = [
  {
    path: '',
    component: Aa16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aa16PageRoutingModule {}
