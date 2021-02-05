import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S16Page } from './s16.page';

const routes: Routes = [
  {
    path: '',
    component: S16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S16PageRoutingModule {}
