import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { BrandModule } from './brand/brand.module';
import { AuthGuard } from './../core/auth/auth.guard';


import { from } from 'rxjs';


const pagesRoutes : Routes = [
  {
    path: 'brand',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order-detail-info',
    loadChildren: () => import('./order-detail-info/order-detail-info.module').then(m => m.OrderDetailInfoModule),
    canActivate: [AuthGuard]
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes),
    BrandModule
  ]
})
export class PagesModule { }
