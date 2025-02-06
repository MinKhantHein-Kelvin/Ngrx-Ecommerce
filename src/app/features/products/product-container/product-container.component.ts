import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../core/models/breadcrumb';
import { ProductService } from '../../../core/services/product.service';
import { lastValueFrom } from 'rxjs';
import { MainIntercomService } from '../../../core/services/main-intercom.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  searchVal: string = '';
  selectedCity : string = ''
  isLoading: boolean = false;
  // categoriesList: Array<string> = [];
  _productService = inject(ProductService);
  public _mainIntercomService = inject(MainIntercomService);

  breadcrumbItems: BreadCrumb[] = [
      { label: 'Dashboard', url: '', ishide: false },
      { label: 'Product List', url: '/admin/user', ishide: false },
  ];

  // cities = ['Yangon', 'Mandalay','Naypyidaw']
  async ngOnInit(): Promise<void> {
    if(this._mainIntercomService.categoriesList.length < 1) {
      this.getAllCategories();
    }
  }

  getAllCategories = async () => {
    try {
      const res: string[] = await lastValueFrom(this._productService.getAllCategories());
      if (res.length > 0) {
        this._mainIntercomService.categoriesList = res;
      }
    } catch (error) {

    }
  }

  onSearch = () => {

  }
}
