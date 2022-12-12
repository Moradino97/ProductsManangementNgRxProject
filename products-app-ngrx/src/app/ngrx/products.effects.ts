import { Injectable } from "@angular/core";
import { ProductsService } from "../services/product.service";
import { createEffect, ofType } from "@ngrx/effects" 
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { DeleteProductActionError, DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess, GetAllProductsActionError, GetAllProductsActionSuccess, GetAvailableProductsActionError, GetAvailableProductsActionSuccess, GetSearchProductsActionError, GetSearchProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductActionError, NewProductActionSuccess, ProductsActions, ProductsActionsTypes, SaveProductActionError, SaveProductActionSuccess, SelectProductActionError, SelectProductActionSuccess, UpdateProductActionError, UpdateProductActionSuccess } from "./products.actions";
import { Actions } from "@ngrx/effects";
@Injectable({providedIn:"root"})
export class ProductsEffects{
    constructor(private productsService:ProductsService, private effectActions:Actions){
    }
    // Effect qui permet de traiter une action de type getAllAproducts
    getAllProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getAllProducts()
                    .pipe(
                        map((products)=> new GetAllProductsActionSuccess(products)),
                        catchError((err)=>of(new GetAllProductsActionError(err)))
                        )
            })
            
            )
        );
        
    // Effect qui permet de traiter une action de type getSelectedproducts
    getSelectedProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getSelectedProducts()
                    .pipe(
                        map((products)=> new GetSelectedProductsActionSuccess(products)),
                        catchError((err)=>of(new GetSelectedProductsActionError(err)))
                        )
            })
            
            )
        );    
    
    // Effect qui permet de traiter une action de type getSelectedproducts
    getAvailableProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getAvailableProducts()
                    .pipe(
                        map((products)=> new GetAvailableProductsActionSuccess(products)),
                        catchError((err)=>of(new GetAvailableProductsActionError(err)))
                        )
            })
            
            )
        );    
    
    // Effect qui permet de traiter une action de type getSelectedproducts
    getSearchProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_SEARCH_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.searchProducts(action.payload)
                    .pipe(
                        map((products)=> new GetSearchProductsActionSuccess(products)),
                        catchError((err)=>of(new GetSearchProductsActionError(err)))
                        )
            })
            
            )
        );    

    // Effect qui permet de traiter une action de type Select product
    SelectProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SELECT_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.setselect(action.payload)
                    .pipe(
                        map((product)=> new SelectProductActionSuccess(product)),
                        catchError((err)=>of(new SelectProductActionError(err)))
                        )
        })
        
        )
    );   

    // Effect qui permet de traiter une action de type Delete product
    DeleteProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.DELETE_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.delete(action.payload)
                    .pipe(
                        map(()=> new DeleteProductActionSuccess(action.payload)),
                        catchError((err)=>of(new DeleteProductActionError(err)))
                        )
        })
        
        )
    ); 

    // Effect qui permet de traiter une action de type New product
    NewProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.NEW_PRODUCT),
            map((action:ProductsActions)=>{
                return new NewProductActionSuccess({});
        })
        
        )
    ); 

    // Effect qui permet de traiter une action de type Save product
    SaveProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SAVE_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.save(action.payload)
                    .pipe(
                        map((product)=> new SaveProductActionSuccess(product)),
                        catchError((err)=>of(new SaveProductActionError(err)))
                        )
        })
        
        )
    );
    
    // Effect qui permet de traiter une action de type Save product
    EditProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.EDIT_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getProduct(action.payload)
                    .pipe(
                        map((product)=> new EditProductActionSuccess(product)),
                        catchError((err)=>of(new EditProductActionError(err)))
                        )
        })
        
        )
    ); 

    // Effect qui permet de traiter une action de type Save product
    UpdateProductsEffect:Observable<Action>=createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.UPDATE_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.updateProduct(action.payload)
                    .pipe(
                        map((product)=> new UpdateProductActionSuccess(product)),
                        catchError((err)=>of(new UpdateProductActionError(err)))
                        )
        })
        
        )
    ); 
}





