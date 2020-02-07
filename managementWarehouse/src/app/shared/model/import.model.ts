import { Moment } from 'moment';
import {Product} from './product.model';
export class Import {
  id?: number;
  productName?: string;
  priceImport?: number;
  quantityImport?: number;
  importDate?: Moment;
  productId?: number;

}
