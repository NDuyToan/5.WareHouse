import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { OrderDetailInfoService } from './/order-detail-info.service';
import { CallAPI } from './../../shared/serviceAPI/callAPI.service';
import { OderDetailInfo } from './../../shared/model/order-detail-info.model';

@Component({
  selector: 'app-order-detail-info',
  templateUrl: './order-detail-info.component.html',
  styleUrls: ['./order-detail-info.component.css']
})
export class OrderDetailInfoComponent implements OnInit {

  public orderDetailInfos: OderDetailInfo[] = [];
  public displayedColumns: string[] = ['id', 'productName', 'priceProduct', 'quantityProduct','amount','orderDate','orderInfo', 'action'];
  constructor(
    private orderDetailInfoService: OrderDetailInfoService,
    private callAPI: CallAPI,

  ) { }

  ngOnInit() {
    this.getAllOrderDetailInfo();
  }
  getAllOrderDetailInfo(){
    this.callAPI.getAllOrderDetailInfos().subscribe( result =>  this.orderDetailInfos = result);
  }
  openDetailInfoNew(){

  }
  editOrderDetailInfo(orderDetailInfo: OderDetailInfo){

  }
  deleteOrderDetailInfo(orderDetailInfo: OderDetailInfo){

  }


}
