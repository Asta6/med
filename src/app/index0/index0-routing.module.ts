import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index0Page } from './index0.page';

const routes: Routes = [
  {
    path: '',
    component: Index0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Index0PageRoutingModule {}
