import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Category } from  './../../../shared/model/category.model';
import { Brand } from  './../../../shared/model/brand.class';
import { Product } from  './../../../shared/model/product.model';
import { CategoryService } from './../../category/category.service';
import { BrandService } from './../../brand/brand.service';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    if(data){
      this.product = data.product;
    //  console.log(this.product);
      this.categoryCurrent = this.product.category;
      this.brandCurrent = this.product.brand;
    }

   }
  public brands: Brand[] = [];
  public brand: Brand;
  public categoryCurrent: Category;
  public brandCurrent: Brand;
  public categories: Category[] = [];
  public product: Product;
  public updateProduct: Product = {};



  frNewProduct = this.fb.group({
    id:[''],
    productName:[''],
    priceProduct:[''],
    quantityProduct:[''],
    category:[null],
    brand:[null,],
  })

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe( (data) => {
      console.log("Check data",data);
      this.categories = data;
    })

    this.brandService.getAllBrands().subscribe( data =>{
      this.brands = data;
   })

   if(this.product ){
     console.log("Check this.product", this.product);
    this.frNewProduct.patchValue({
      id:this.product.id,
      productName:this.product.productName,
      priceProduct:this.product.priceProduct,
     quantityProduct:this.product.quantityProduct,
     category: this.product.category ? this.product.category.id : null,
     brand:this.product.brand.id ? this.product.brand.id : null,
    })

    console.log("Check form",this.frNewProduct.getRawValue());

   }


  }



  Close(){
    this.dialogRef.close('close');
  }

  Save(){
    //console.log('value form');
    console.log(this.frNewProduct.value);
     this.updateProduct.id = this.frNewProduct.value.id;
     this.updateProduct.productName = this.frNewProduct.value.productName;
     this.updateProduct.priceProduct = this.frNewProduct.value.priceProduct;
     this.updateProduct.quantityProduct = this.frNewProduct.value.quantityProduct;
     this.updateProduct.category = this.categories.find( item => item.id== this.frNewProduct.value.category);
     this.updateProduct.brand = this.brands.find( item => item.id== this.frNewProduct.value.brand);
    //console.log('value update product');
    // console.log(this.updateProduct);
    this.dialogRef.close(this.updateProduct);
   // this.dialogRef.close(this.frNewProduct.value);
  }
  //  if(this.product ){
  //   this.frNewProduct.patchValue({
  //     id:this.product.id,
  //     productName:this.product.productName,
  //     priceProduct:this.product.priceProduct,
  //    quantityProduct:this.product.quantityProduct,
  //    category: this.product.category.id,
  //   // brand:this.product.brand.id || null,
  //   })

  //


}
