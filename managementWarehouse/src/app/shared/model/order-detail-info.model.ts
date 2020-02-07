import { Moment } from 'moment';
import { Product } from './product.model';
export class OderDetailInfo {
  id?: number;
  productName?: string;
  priceProduct?: number;
  quantityOrder?: number;
  amount?: number;
  orderDate?: Moment;
  orderInfoId?: number;
  product?: number;
  reportId?: number;
}
