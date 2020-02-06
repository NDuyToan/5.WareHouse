import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { URL_ORDER_DETAIL_INFO } from './../../app.const';
import { OderDetailInfo } from './../../shared/model/order-detail-info.model';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailInfoService {

  constructor(
    private http: HttpClient,
    private authServerProvider: AuthServerProvider,
  ) { }
  private token:string = this.authServerProvider.getLocal();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  getAllOrderDetailInfos(): Observable<OderDetailInfo[]>{
    return this.http.get<OderDetailInfo[]>(URL_ORDER_DETAIL_INFO);

  }


}
