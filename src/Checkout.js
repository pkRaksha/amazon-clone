import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="checkout">
         <div className="checkout_left">
             <img className="checkout_ad"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CBCC_PLAT/billboard2FINAL.png"/>
             <div>
                 <h2 className="checkout_title">Your shopping Basket</h2>
                 {/*Basket*/}
             </div>
             </div>  
             <div className="checkout_right">
               <Subtotal/>
                
                 </div> 
        </div>
    )
}

export default Checkout
