import { Action } from "@ngrx/store";
import { Product } from "../models/product.model";

export enum ProductsActionsTypes{
    
    GET_ALL_PRODUCTS="[Products] Get All products",
    GET_ALL_PRODUCTS_SUCCES="[Products] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",
    
    GET_SELECTED_PRODUCTS="[Products] Get Selected products",
    GET_SELECTED_PRODUCTS_SUCCES="[Products] Get Selected products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",
    
    GET_AVAILABLE_PRODUCTS="[Products] Get Avilable products",
    GET_AVAILABLE_PRODUCTS_SUCCES="[Products] Get Available products Success",
    GET_AVAILABLE_PRODUCTS_ERROR="[Products] Get Available products Error",

    GET_SEARCH_PRODUCTS="[Products] Get Search products",
    GET_SEARCH_PRODUCTS_SUCCES="[Products] Get Search products Success",
    GET_SEARCH_PRODUCTS_ERROR="[Products] Get Search products Error",

    SELECT_PRODUCT="[Product] Select product",
    SELECT_PRODUCT_SUCCES="[Product] Select product Success",
    SELECT_PRODUCT_ERROR="[Product] Select product Error",

    DELETE_PRODUCT="[Product] Delete product",
    DELETE_PRODUCT_SUCCES="[Product] Delete product Success",
    DELETE_PRODUCT_ERROR="[Product] Delete product Error",

    NEW_PRODUCT="[Product] New product",
    NEW_PRODUCT_SUCCES="[Product] New product Success",
    NEW_PRODUCT_ERROR="[Product] New product Error",

    SAVE_PRODUCT="[Product] Save product",
    SAVE_PRODUCT_SUCCES="[Product] Save product Success",
    SAVE_PRODUCT_ERROR="[Product] Save product Error",

    EDIT_PRODUCT="[Product] Edit product",
    EDIT_PRODUCT_SUCCES="[Product] Edit product Success",
    EDIT_PRODUCT_ERROR="[Product] Edit product Error",
   
    UPDATE_PRODUCT="[Product] Update product",
    UPDATE_PRODUCT_SUCCES="[Product] Update product Success",
    UPDATE_PRODUCT_ERROR="[Product] Update product Error"
  
};

// Aciotn for Getiing all products
export class GetAllProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload:any){}
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCES;
    constructor(public payload:Product[]){}
}


export class GetAllProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload:string){}
}

// Actions for Getting the selected products
export class GetSelectedProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload:any){}
}

export class GetSelectedProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCES;
    constructor(public payload:Product[]){}
}


export class GetSelectedProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload:string){}
}


// Actions for Getting the available products
export class GetAvailableProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;
    constructor(public payload:any){}
}

export class GetAvailableProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCES;
    constructor(public payload:Product[]){}
}


export class GetAvailableProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
    constructor(public payload:string){}
}

// Actions for Getting the searching products
export class GetSearchProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SEARCH_PRODUCTS;
    constructor(public payload:string){}
}

export class GetSearchProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SEARCH_PRODUCTS_SUCCES;
    constructor(public payload:Product[]){}
}

export class GetSearchProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SEARCH_PRODUCTS_ERROR;
    constructor(public payload:string){}
}

// Actions for select/unselect product
export class SelectProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;
    constructor(public payload:Product){}
}

export class SelectProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCES;
    constructor(public payload:Product){}
}

export class SelectProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload:string){}
}


// Actions for delete product
export class DeleteProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT;
    constructor(public payload:Product){}
}

export class DeleteProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCES;
    constructor(public payload:Product){}
}

export class DeleteProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR;
    constructor(public payload:string){}
}


// Actions for creating product
export class NewProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT;
    constructor(public payload:any){}
}

export class NewProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_SUCCES;
    constructor(public payload:any){}
}

export class NewProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_ERROR;
    constructor(public payload:string){}
}

// Actions for save product
export class SaveProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT;
    constructor(public payload:Product){}
}

export class SaveProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_SUCCES;
    constructor(public payload:Product){}
}

export class SaveProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_ERROR;
    constructor(public payload:string){}
}

// Actions for edit product
export class EditProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT;
    constructor(public payload:number){}
}

export class EditProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_SUCCES;
    constructor(public payload:Product){}
}

export class EditProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_ERROR;
    constructor(public payload:string){}
}

// Actions for update product
export class UpdateProductAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT;
    constructor(public payload:Product){}
}

export class UpdateProductActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_SUCCES;
    constructor(public payload:Product){}
}

export class UpdateProductActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_ERROR;
    constructor(public payload:string){}
}

export type ProductsActions=
GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError | 
GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
GetAvailableProductsAction | GetAvailableProductsActionSuccess | GetAvailableProductsActionError |
GetSearchProductsAction | GetSearchProductsActionSuccess | GetSearchProductsActionError|
SelectProductAction | SelectProductActionSuccess | SelectProductActionError |
DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError |
NewProductAction | NewProductActionSuccess | NewProductActionError |
SaveProductAction | SaveProductActionSuccess | SaveProductActionError |
EditProductAction | EditProductActionSuccess | EditProductActionError |
UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError ;