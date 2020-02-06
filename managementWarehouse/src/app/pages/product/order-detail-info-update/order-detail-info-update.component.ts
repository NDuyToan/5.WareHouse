import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Product } from 'src/app/shared/model/product.model';
import { OderDetailInfo } from './../../../shared/model/order-detail-info.model';
 import { CallAPI } from './../../../shared/serviceAPI/callAPI.service';



@Component({
  selector: 'app-order-detail-info-update',
  templateUrl: './order-detail-info-update.component.html',
  styleUrls: ['./order-detail-info-update.component.css']
})
export class OrderDetailInfoUpdateComponent implements OnInit {
  private product : Product;
  private newOrderDetailInfo: OderDetailInfo = {};
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OrderDetailInfoUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private callAPI: CallAPI,

  ) {
    this.product = data.product;
   }
  frNewOrderDetailInfo = this.fb.group({
    quantityOrder:[''],
    // id:[''],
    // productName:[''],
    // priceProduct:[''],

    // amount:[''],
    // orderDate:[''],
    // orderInfoId:[''],
    // productId:[''],
    // reportId:[''],
  })

  ngOnInit() {
    console.log("get product ",this.product);
  }
  Close(){
    this.dialogRef.close('close');
  }
  Save(){
   // console.log(this.frNewOrderDetailInfo.getRawValue());
    this.newOrderDetailInfo.productName = this.product.productName;
    this.newOrderDetailInfo.product = this.product.id;
    this.newOrderDetailInfo.quantityOrder = this.frNewOrderDetailInfo.value.quantityOrder;
    this.newOrderDetailInfo.priceProduct = this.product.priceProduct;
    console.log("value Oder Detail ",this.newOrderDetailInfo);
    this.callAPI.createNewOrderDetailInfo(this.newOrderDetailInfo).subscribe( ()=>{
      this.dialogRef.close('save');
    })

  }


}
