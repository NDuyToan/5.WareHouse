import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Product} from './../../../shared/model/product.model';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public product: Product = {};

  constructor(
    private dialogRef: MatDialogRef<ViewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      this.product=data.product;
    }

  ngOnInit() {

  }
  Close(){
    this.dialogRef.close();
  }

}
