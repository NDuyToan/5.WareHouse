import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Product } from 'src/app/shared/model/product.model';
import { OderDetailInfo } from './../../../shared/model/order-detail-info.model';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  public product: Product;
  public orderDetailInfo: OderDetailInfo;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.product = data.product;
  }

  frNewOrderDetailInfo = this.fb.group({
    id:[''],
    productName:[''],
    priceProduct:[''],
    quantityOrder:[''],
    amount:[''],
    orderDate:[''],
    orderInfoId:[''],
    productId:[''],
    reportId:[''],
  })

  ngOnInit() {
    console.log(this.product);
  }
  Close(){
    this.dialogRef.close('close');
  }
  Save(){
    console.log(this.frNewOrderDetailInfo.value);
    this.dialogRef.close('close');
  }

}
