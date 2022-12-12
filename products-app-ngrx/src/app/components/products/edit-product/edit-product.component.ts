import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { EditProductAction, UpdateProductAction } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productID:number;
  state:ProductsState | null=null;
  productFormGroup:FormGroup | null=null;
  readonly productsStateEnum = ProductsStateEnum
  submited : boolean = false
  formBuilt: boolean = false
  constructor(private service:ProductsService , private router: Router, private activateRoute:ActivatedRoute, private store:Store<any>, private fb:FormBuilder) { 
    this.productID=activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.productID);
    this.store.dispatch(new EditProductAction(this.productID));

    this.store.subscribe(state=>{
      this.state=state.catalogState;
      console.log(this.state?.dataState);
    
      if(this.state?.dataState==ProductsStateEnum.EDIT){
        
        if(this.state.currentProduct!=null){
          
          this.productFormGroup=this.fb.group({
            id:[this.state?.currentProduct.id,Validators.required],
            name:[this.state?.currentProduct.name,Validators.required],
            price:[this.state?.currentProduct.price,Validators.required],
            quantity:[this.state?.currentProduct.quantity,Validators.required],
            selected:[this.state?.currentProduct.selected,Validators.required],
            available:[this.state?.currentProduct.available,Validators.required]
          });
          this.formBuilt=true; 
            
          
        }
        console.log("ttttttttttttt");
        console.log(this.state.currentProduct);
        
      }
    });
  }

  okUpdated(){
    this.router.navigateByUrl("/products")
  }
  onUpdateProduct(){
    this.submited=true
    if(this.productFormGroup?.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));

  }  
}
function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}

