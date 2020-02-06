import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { URL_ORDER_DETAIL_INFO } from './../../app.const';
import { OderDetailInfo } from './../../shared/model/order-detail-info.model';


@Injectable({
  providedIn: 'root'
})
export class CallAPI {

  constructor(
    private http:HttpClient,
  ) { }

  getAllOrderDetailInfos(): Observable<OderDetailInfo[]>{
    return this.http.get<OderDetailInfo[]>(URL_ORDER_DETAIL_INFO);
  }
  createNewOrderDetailInfo(orderDetailInfo: OderDetailInfo): Observable<OderDetailInfo>{
    return this.http.post<OderDetailInfo>(URL_ORDER_DETAIL_INFO, orderDetailInfo);
  }


}
