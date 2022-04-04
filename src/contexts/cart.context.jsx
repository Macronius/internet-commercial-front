import { createContext, useEffect, useState } from 'react';



// HELPER FUNCTIONS
const addCartItemHelper = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find( 
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map( (cartItem) => 
            cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1}];
}


const removeCartItemHelper = (cartItems, cartItemToRemove) => {

    // stores actual cart item in focus
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    // remove item if already at qty 1
    if (existingCartItem.quantity === 1) {
        return cartItems.filter( item => item.id !== cartItemToRemove.id);
    }
    // decrement 1
    return cartItems.map( item => 
        item.id === cartItemToRemove.id 
        ? { ...item, quantity: item.quantity - 1}
        : item
    );
}


const clearCartItemHelper = (cartItems, cartItemToClear) => {
     return cartItems.filter( item => item.id !== cartItemToClear);
}



// MAIN FUNCTIONS
export const CartContext = createContext( {
    isCartOpen: false,
    // setIsOpen: () => {},
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});


export const CartProvider = ( {children} ) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( () => {
        const newCartCount = cartItems.reduce( (total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect( () => {
        const newCartTotal = cartItems.reduce( 
            (total, cartItem) => total + cartItem.quantity*cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItemHelper(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItemHelper(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItemHelper(cartItems, cartItemToClear));
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart,
        cartCount,
        cartTotal
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}