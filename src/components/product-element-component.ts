import { productArray } from "../data/productRepository";
import  value  from '../styles/productElement.scss'
const productsTemplate=document.createElement('template')

productsTemplate.innerHTML+=`
<!--<style>
${value}
</style>-->
<table id="productTable">
<caption id="caption"></caption>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Delete</th>
            </tr>
</table>
            <table>
        <tbody id="prodTBody">

        </tbody>
    
    </table>  
`;


export class ProductElement extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
      const styleele=document.createElement('style')
     styleele.innerText=value;
     this.shadowRoot.appendChild(styleele)  
    }
    connectedCallback(){
    
        this.shadowRoot.appendChild(productsTemplate.content.cloneNode(true))
        this.shadowRoot.querySelector('caption').innerHTML=`${productArray.length} Record(s) found...`
        productArray.forEach(product=>{
            const obj=JSON.stringify(product)
            this.shadowRoot.querySelector('tbody').innerHTML+=`<tr><product-row product='${obj}'></product-row></tr>`
        })
       
}
}
