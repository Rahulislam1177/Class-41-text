import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
import Card from "../Card/Card";


const Shop = () => {
    const [card,setCard] =useState ([]);
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handelAddToCart =(selectedProduct)=>{
      const newCard =[...card,selectedProduct]
      setCard(newCard)
     }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                      handelAddToCart={handelAddToCart}
                      >
                      </Product>)
                }
            </div>
             <div className="card-container">
                <Card
                card={card}
                ></Card>
             </div>
            
        </div>
    );
};

export default Shop;