import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  },
  {
    path: 'history-detail/:id',
    loadChildren: () => import('./history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
