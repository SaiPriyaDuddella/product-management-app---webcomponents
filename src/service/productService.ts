import { productArray } from '../data/productRepository'
import { Product } from '../model/ProductImpl';

export const addproduct = (newProduct: Product) => {
    let found: Product;
    if (productArray.length > 0) {
        found = productArray.find((e) => {
            return e.code === newProduct.code;
        })
    }

    if (found === undefined || productArray.length === 0) {
        productArray.push(newProduct)
    
    }
}

export const deleteProduct=(Id:number)=>{
    if(productArray.length>0){
        for(let index=0;index<productArray.length;index++){
            if(productArray[index].code==Id)
        productArray.splice(index,1)
        }
    }
}
