import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A16Page } from './a16.page';

const routes: Routes = [
  {
    path: '',
    component: A16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A16PageRoutingModule {}
