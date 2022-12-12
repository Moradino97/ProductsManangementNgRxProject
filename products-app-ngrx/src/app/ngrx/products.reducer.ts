import {Product} from '../models/product.model'
import {ProductsActions, ProductsActionsTypes} from './products.actions';
import {Action} from '@ngrx/store'
export enum ProductsStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    NEW="new",
    EDIT="edit",
    UPDATED="updated"
}

export interface ProductsState{
    product: any;
    products:Product[]; //Data
    errorMessage:string; //Message d'erreur
    dataState:ProductsStateEnum //loading.. success.. error..
    currentProduct: Product | null// the product to Update
}
const initState:ProductsState={
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL,
    currentProduct: null,
    product: undefined
}

export function ProductsReducer(state:ProductsState=initState, action:Action):ProductsState{
    switch(action.type){
        // Traitement des Actions de type getAllproducts
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCES:
        return{...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
        
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       
        // Traitement des Actions de type getSelectedproducts
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCES:
        return{...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
        
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       
        // Traitement des Actions de type getAvailableproducts
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCES:
        return{...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
        
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       
        // Traitement des Actions de type getSearchproducts
        case ProductsActionsTypes.GET_SEARCH_PRODUCTS:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.GET_SEARCH_PRODUCTS_SUCCES:
        return{...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
        
        case ProductsActionsTypes.GET_SEARCH_PRODUCTS_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
        


        // Traitement des Actions de type selectProduct
        case ProductsActionsTypes.SELECT_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.SELECT_PRODUCT_SUCCES:
            let product:Product=(<ProductsActions>action).payload
            let listProducts:Product[] =[...state.products];
            let data:Product[] = listProducts.map(p=>p.id==product.id?product:p);
        return{...state, dataState:ProductsStateEnum.LOADED, products:data}
        
        case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

        // Traitement des Actions de type selectProduct
        case ProductsActionsTypes.DELETE_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.DELETE_PRODUCT_SUCCES:
            let productDelete:Product=(<ProductsActions>action).payload
            let listProductsDelete:Product[] =[...state.products];
            let index = listProductsDelete.indexOf(productDelete);
            let dataDelete:Product[] =  listProductsDelete.splice(index,1);
            
        return{...state, dataState:ProductsStateEnum.LOADED, products:listProductsDelete}
        
        case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       

        // Traitement des Actions de type NewProduct
        case ProductsActionsTypes.NEW_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.NEW_PRODUCT_SUCCES: 
        return{...state, dataState:ProductsStateEnum.NEW}
        
        case ProductsActionsTypes.NEW_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       

        // Traitement des Actions de type SaveProduct
        case ProductsActionsTypes.SAVE_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.SAVE_PRODUCT_SUCCES:
            let prods = [...state.products];
            prods.push((<ProductsActions>action).payload)  
        return{...state, dataState:ProductsStateEnum.LOADED, products:prods}
        
        case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
        

        // Traitement des Actions de type EditProduct
        case ProductsActionsTypes.EDIT_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.EDIT_PRODUCT_SUCCES: 
        return{...state, dataState:ProductsStateEnum.EDIT,currentProduct:(<ProductsActions>action).payload}
        
        case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       

        // Traitement des Actions de type UpdateProduct
        case ProductsActionsTypes.UPDATE_PRODUCT:
        return{...state, dataState:ProductsStateEnum.LOADING}
        
        case ProductsActionsTypes.UPDATE_PRODUCT_SUCCES:
            let updatedProduct:Product=(<ProductsActions>action).payload;
            let productsList=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
        return{...state, dataState:ProductsStateEnum.UPDATED, products:productsList}
        
        case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
        return{...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
       
        default : return{...state}
    }
}