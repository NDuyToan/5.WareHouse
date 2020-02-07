import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Product} from './../../../shared/model/product.model';
import { CallAPI } from './../../../shared/serviceAPI/callAPI.service';
import { Import } from './../../../shared/model/import.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-import-detail-info',
  templateUrl: './import-detail-info.component.html',
  styleUrls: ['./import-detail-info.component.css']
})
export class ImportDetailInfoComponent implements OnInit {
  private product: Product = {};
  private newImportDetailInfo: Import= {};

  constructor(
    private fb:FormBuilder,
    private callAPI: CallAPI,
    private dialogRef: MatDialogRef<ImportDetailInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.product =data.product;
  }
  frImportDetailInfo = this.fb.group({
    quantityImport:[''],
    priceImport: [''],
  })

  ngOnInit() {

  }
  Cancel(){
    this.dialogRef.close('cancel');
  }
  Save(){

    this.newImportDetailInfo.productName = this.product.productName;
    this.newImportDetailInfo.quantityImport = this.frImportDetailInfo.value.quantityImport;
    this.newImportDetailInfo.priceImport = this.frImportDetailInfo.value.priceImport;
    this.newImportDetailInfo.productId = this.product.id;
    this.callAPI.creatNewImportDetailInfo(this.newImportDetailInfo).subscribe( ()=>{
      this.dialogRef.close('save');
    })
  }


}
