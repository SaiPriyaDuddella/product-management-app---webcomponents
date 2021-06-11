import { productArray } from "../data/productRepository"
import { deleteProduct } from "../service/productService"
import value  from '../styles/productRow.scss'
const productRow=document.createElement('template')
productRow.innerHTML=`
<style>
${value}
</style>

        <td><img /></td>
           <td id="name"></td>
           <td id="code"></td>
           <td id="price"></td>
           <td id="rating"></td>  
           <td id="del"></td>
           
`
export class ProductRow extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.shadowRoot.appendChild(productRow.content.cloneNode(true))
        var productObj=JSON.parse(this.getAttribute('product'))
        this.shadowRoot.querySelector('img').setAttribute('src',productObj.image)
        this.shadowRoot.getElementById('name').innerText=productObj.name;
        this.shadowRoot.getElementById('code').innerHTML=productObj.code;
        this.shadowRoot.getElementById('price').innerText=productObj.price;
        this.shadowRoot.getElementById('rating').innerText=productObj.rating;
        this.shadowRoot.getElementById('del').innerHTML=`<button id='${productObj.code}'>Delete</button>`
        this.shadowRoot.getElementById('del').addEventListener('click',()=>this.delete())
    }
delete(){
    const Id=+this.shadowRoot.querySelector('button').getAttribute('id');
    deleteProduct(Id)
    this.remove()
    //console.log(productArray)
    var temp1=document.querySelector('product-element')
    //console.log(temp1)

    temp1.shadowRoot.getElementById('caption').innerHTML=`${productArray.length} Record(s) found...`
   
}
}
