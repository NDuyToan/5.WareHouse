import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailInfoComponent } from './order-detail-info.component';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailInfoComponent
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderDetailInfoRoutingModule { }
