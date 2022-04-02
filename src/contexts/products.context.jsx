import React from 'react';

import PRODUCTS from '../shop-data.json';


export const ProductsContext = React.createContext({
    products: [],  //what we want to store
    // some function that allows to set those products
});


//the actual component goes here
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = React.useState(PRODUCTS);
    const value = {products}; //QUESTION: why make it an object?
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}