import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { DeleteProductAction, SelectProductAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product : Product | null = null;
  constructor(private store:Store, private route: Router) { }

  ngOnInit(): void {
  }
  onSelect(product :Product){
    this.store.dispatch(new SelectProductAction(product));
  }
  onDelete(product:Product){
    this.store.dispatch(new DeleteProductAction(product));
  }
  onEdit(product:Product){
    this.route.navigateByUrl("/editProduct/"+product.id);
  }

}

