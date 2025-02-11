import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { BreadCrumb } from '../../../core/models/breadcrumb';
import { ProductService } from '../../../core/services/product.service';
import { lastValueFrom } from 'rxjs';
import { MainIntercomService } from '../../../core/services/main-intercom.service';
import { Products } from '../../../core/models/product';
import { tableHeader } from '../../../core/models/common';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {
  private _productService = inject(ProductService);
  public _mainIntercomService = inject(MainIntercomService);
  private cdr = inject(ChangeDetectorRef);
  productsList: Products[] = [];
  searchVal: string = '';
  selectedCity: string = '';
  isCategoryLoading: boolean = false;
  isLoading: boolean = false;
  category: string = '';

  breadcrumbItems: BreadCrumb[] = [
    { label: 'Dashboard', url: '', ishide: false },
    { label: 'Product List', url: '/admin/user', ishide: false },
  ]
   headerArray: tableHeader[] = [
    { header: 'Title', fieldname: 'title', type: 'text', width: 30 },
    { header: 'Image', fieldname: 'image', type: 'image', width: 10 },
    { header: 'Price ($)', fieldname: 'price', type: 'number', width: 10 },
    { header: 'Category', fieldname: 'category', type: 'text', width: 15 },
    { header: 'Rating', fieldname: 'rating.rate', type: 'rating', width: 10 },
    { header: 'Stock', fieldname: 'rating.count', type: 'stock', width: 10 }
  ];

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    if (this._mainIntercomService.categoriesList.length < 1) {
      await this.getAllCategories();
    }else{
      this.category = this._mainIntercomService.categoriesList[0];
    }
    await this.getAllProducts();
  }

  getAllCategories = async () => {
    try {
      this.isCategoryLoading = true;
      const res: string[] = await lastValueFrom(
        this._productService.getAllCategories()
      );
      if (res.length > 0) {
        this._mainIntercomService.categoriesList = ['-', ...res]
        this.category = this._mainIntercomService.categoriesList[0];
      }
    } catch (error) {
    } finally {
      this.isCategoryLoading = false;
      this.cdr.detectChanges();
    }
  };

  getAllProducts = async () => {
    try {
      // this.productsList = [];
      this.isLoading = true;
      let res : Products[] = [];
      if (this.category != '' && this.category != '-') {
        res = await lastValueFrom(
          this._productService.getAllProductsListByCategory(this.category)
        );
      } else {
        res = await lastValueFrom(
          this._productService.getAllProductsList()
        );
      }

      if (res.length > 0) {
        this.productsList = res;
      }

    } catch (error) {
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  };

  onSearch = () => {};

  onCategoryChange = async (category: string) => {
    this.category = category;
    await this.getAllProducts();
  };

  OnEdit = (product : Products) => {

  }
}
