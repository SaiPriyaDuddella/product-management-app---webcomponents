
import { Product } from "./model/ProductImpl";
import { addproduct} from './service/productService'
//import './styles/productElement.css'

import img from './images/tv.jpg'
import img2 from './images/mobile.jpg'
import img3 from './images/refridge.jpg'
import img4 from './images/ac.jpg'
import { ProductElement } from "./components/product-element-component";
import { ProductRow } from './components/product-row-component'
addproduct(new Product('Tv', 1, 10000, 4.5,img))
addproduct(new Product('Mobile', 2, 20000, 4,img2))
addproduct(new Product('Refrigrator', 3, 40000, 3.5,img3))
addproduct(new Product('Ac', 4, 60000,5.0,img4))

customElements.define('product-row',ProductRow)

customElements.define('product-element',ProductElement)
