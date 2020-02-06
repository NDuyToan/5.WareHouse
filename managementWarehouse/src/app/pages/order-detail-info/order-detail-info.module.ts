import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from "@angular/material";


import { OrderDetailInfoComponent } from './order-detail-info.component';
import { OrderDetailInfoRoutingModule } from './order-detail-info.route';
import { NewOrderComponent } from './new-order/new-order.component';
@NgModule({
  declarations: [
    OrderDetailInfoComponent,
    NewOrderComponent,
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    OrderDetailInfoRoutingModule,

  ],
  entryComponents: []
})
export class OrderDetailInfoModule { }
