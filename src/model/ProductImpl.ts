import {IProduct} from './Iproduct'
export class Product implements IProduct{
    constructor(public name:string,public code:number,public price:number,
        public rating:number,
        public image:string
        )
        {

        }
}