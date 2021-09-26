import React from 'react'
import "./Product.css"

function Product(props) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                <small>$</small>
                <strong>{props.price}</strong>
                </p>
               <div className="product_rating">
                  { Array(props.rating).fill().map((_, i) =>(
                    <p>⭐</p>
                   ))}
               
               </div>
              
            </div>
            <img className="product_image" src={props.image}></img>
            <button className="product_button">Add to Basket</button>
            
        </div>
    )
}

export default Product
