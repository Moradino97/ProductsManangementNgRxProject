import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetAvailableProductsAction, GetSearchProductsAction, GetSelectedProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.store.dispatch(new GetAllProductsAction({}))
  }
  onGetSelectedProducts(){
    this.store.dispatch(new GetSelectedProductsAction({}))
  }
  onGetAvailableProducts(){
    this.store.dispatch(new GetAvailableProductsAction({}))
  }
  onSearch(dataForm:any){
    this.store.dispatch(new GetSearchProductsAction(dataForm))
  }
  onNewProduct(){
    this.router.navigateByUrl("/newProduct");
  }
}
