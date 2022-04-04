import React from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';


const Checkout = () => {

    
    const { cartItems, cartTotal } = React.useContext(CartContext);


    return (
        <div className="checkout-container">
            <div className="header-container">
                <h1>Checkout</h1>
            </div>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {
                    cartItems.map( item => (
                            <CheckoutItem 
                                key={item.id}
                                cartItem={item} 
                            />
                    ))
                }
            </div>
            <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;